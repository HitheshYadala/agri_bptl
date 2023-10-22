import React, { useEffect, useState } from 'react';
import { api_url } from '../App';
import axios from 'axios';
import "../components/Styles/Hiringpartners.scss"

function Hiringpartners() {
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
    // console.log("Hiring Partners called")
    try {
      const response = await axios.get(`${api_url}/hiringpartner`);
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
      <h1 className="Hiring-partners">Hiring Partners</h1>
      <div className="marquee">
        <div className="marquee-content">
          {images.map((item, index) => (
            <div className="marquee-item" key={index}>
              <img style={{width:"160px"}} src={`data:image/png;base64,${item}`} alt="hiring partners" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hiringpartners;
