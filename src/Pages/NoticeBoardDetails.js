import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../components/Styles/noticeboardDetails.css"
import { api_url } from "../App";

const NoticeBoardDetails = () => {
  // Use the useParams hook to get the dynamic parameter from the URL
  const { id } = useParams();

  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletedItemId, setDeletedItemId] = useState(null);
  const [dataArr, setDataArr] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  // const openFullscreen = (image, index) => {
  //   setFullscreenImage(image);
  //   setCurrentImageIndex(index);
  // };

  // Function to close the fullscreen view
  const closeFullscreen = () => {
    setFullscreenImage(null);
    setCurrentImageIndex(null);
  };

  const openFullscreen = (index) => {
    setFullscreenImage(images.Image[index]);
    setCurrentImageIndex(index);
  };

  // Function to navigate to the previous image
  const prevImage = (event) => {
    event.stopPropagation();
    const prevIndex = currentImageIndex === 0 ? images.Image.length - 1 : currentImageIndex - 1;
    setFullscreenImage(images.Image[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  // Function to navigate to the next image
  const nextImage = (event) => {
    event.stopPropagation();
    const nextIndex = currentImageIndex === images.Image.length - 1 ? 0 : currentImageIndex + 1;
    setFullscreenImage(images.Image[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };


  useEffect(() => {
    fetchImages();
    console.log("DATA ID", id);
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        `${api_url}/noticeboard/` + id
      );
      setImages(response.data);
      setDataArr(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching images:", error.message);
      setError("Error fetching images");
      setIsLoading(false);
    }
  };

  // if (isLoading) {
  //   return <h3>Loading...</h3>;
  // }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div className="container">
    {/* Loading overlay */}
    {isLoading && (
      <div className="loading-overlay">
        <h2>Loading...</h2>
        <div className="spinner" />
      </div>
    )}

    {!isLoading && (
      <>
        <div className="header">
          <h1>{images.Description}</h1>
          <h5>{images.Description}</h5>
        </div>
        <div className="image-container">
          {images.Image.map((item, index) => (
            <img
              key={index}
              src={`data:image;base64,${item}`}
              alt="Base64 Image"
              onClick={() => openFullscreen(index)} // Only pass the index
            />
          ))}
        </div>
        <div className="footer" />

        {/* Fullscreen overlay */}
        {fullscreenImage && (
          <div className="fullscreen-overlay" onClick={closeFullscreen}>
            <button className="prev-button" onClick={prevImage}>
              &lt;
            </button>
            <button className="close-button" onClick={closeFullscreen}>
              &times;
            </button>
            <button className="next-button" onClick={nextImage}>
              &gt;
            </button>
            <img
              src={`data:image;base64,${fullscreenImage}`}
              alt="Full-Screen"
              onClick={nextImage}
            />
          </div>
        )}
      </>
    )}
  </div>
  );
};

export default NoticeBoardDetails;
