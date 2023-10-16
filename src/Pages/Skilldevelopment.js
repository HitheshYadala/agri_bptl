import React, { useEffect, useState } from 'react';
import { api_url } from '../App';
import axios from 'axios';
import "../components/Styles/SkillTraining.scss"

function Skilldevelopment() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dataFetched, setDataFetched] = useState(false)

  const [reRenderCount, setReRenderCount] = useState(0);

  useEffect(() => {
    if(!dataFetched){
    fetchImages();
    }
  }, [dataFetched]);


  useEffect(() => {
    if (dataFetched) {
      if (images.length > 0) {
        // Check if the notices array is not empty
        console.log("Notices have been updated:");
      }
      setReRenderCount((prevCount) => prevCount + 1); // Increment re-render count
    }
  }, []);

  const fetchImages = async () => {
    console.log("Skill development called")
    try {
      const response = await axios.get(`${api_url}/training`);
      setImages(response.data);
      setIsLoading(false);

      const partnerArr = response.data.map((item) => item.Image);
      setImages(partnerArr);
      setDataFetched(true)
    } catch (error) {
      console.error('Error fetching Hiring partners:', error.message);
    }
  };

  return (
    <div>
      <h1 className="Hiring-partnersy">Hiring Partners</h1>
      <div className="marqueey">
        <div className="marquee-contenty">
          {images.map((item, index) => (
            <div className="marquee-itemy" key={index}>
              <img style={{width:"160px"}} src={`data:image/png;base64,${item}`} alt="skill develoement" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skilldevelopment;
