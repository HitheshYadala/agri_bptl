import React, { useEffect, useState } from 'react';
import "../components/Styles/SkillTraining.scss";
import { api_url } from '../App';
import axios from 'axios';

function Skilldevelopment() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get(`${api_url}/training`);
      setImages(response.data);
      setIsLoading(false);

      const partnerArr = response.data.map((item) => item.Image);
      setImages(partnerArr);
    } catch (error) {
      console.error('Error fetching Training partners:', error.message);
    }
  };


  return (
    <div>
      <h1 className="Hiring-partnersy">Training & Skill development</h1>
      <div className="marqueey">
        <div className="marquee-contenty">
          {images.map((item, index) => (
            <div className="marquee-itemy" key={index}>
              <img src={`data:image/png;base64,${item}`} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skilldevelopment;
