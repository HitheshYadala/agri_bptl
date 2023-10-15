import React, { useEffect, useState } from 'react';
import { api_url } from '../App';
import axios from 'axios';
import "../components/Styles/Hiringpartners.scss"

function Hiringpartners() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get(`${api_url}/hiringpartner`);
      setImages(response.data);
      setIsLoading(false);

      const partnerArr = response.data.map((item) => item.Image);
      setImages(partnerArr);
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
              <img src={`data:image/png;base64,${item}`} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hiringpartners;
