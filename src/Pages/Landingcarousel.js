import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import "../components/Styles/Landingcarousel.css";
import { api_url } from "../App";

const Landingcarousel = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imgSet, setImgSet] = useState([]);

  const [dataFetched, setDataFetched] = useState(false);
  

  useEffect(() => {
    if(!dataFetched){
      fetchImages();
    }
  }, [dataFetched]);

  const fetchImages = async () => {
    console.log("Landing carousel called")
    try {
      const response = await axios.get(`${api_url}/carousel`);
      setData(response.data);

      // Create a new array based on response.data and update the state
      const imageArray = response.data.map((item) => item.Image);
      setImgSet(imageArray);

      setIsLoading(false);

      setDataFetched(true)
    } catch (error) {
      console.error("Error fetching images:", error.message);
    }
  };

  const imageDataHandler = (imageData) => {
    console.log("ImageData ", imageData);
  };

  return (
    <div className="main">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        dynamicHeight={false}
        autoPlay={true}
        stopOnHover={false}
        selectedItem={index}
        onChange={(index) => setIndex(index)}
      >
        {imgSet.map((image, idx) => (
          <div className="carouselImg" key={idx}>
            <img className="imgs" 
            // src={image}
            src={`data:image/png;base64,${image}`}
            alt={`Image ${idx}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Landingcarousel;
