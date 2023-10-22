import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../components/Styles/noticeboardDetails.css";
import { api_url } from "../App";
import LazyLoad from 'react-lazyload';

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

  // Function to close the fullscreen view

  const isPdf = (item) => {
    return item.startsWith("JVBERi");
  };

  const isImage = (item) => {
    return item.startsWith("iVBORw0KGgo") // PNG
      || item.startsWith("/9j/4AAQSkZJRgABAQAAAQABAAD/") // JPEG
      || item.startsWith("R0lGODlh") // GIF
      || item.startsWith("BM") // BMP
      || item.startsWith("WEBP") // WebP;
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
    setCurrentImageIndex(null);
  };

  const openFullscreen = (item) => {
    if (isPdf(item)) {
      window.open(`data:application/pdf;base64,${item}`, "_blank");
    } else {
      setFullscreenImage(item);
    }
  };

  // Function to navigate to the previous image
  const prevImage = (event) => {
    event.stopPropagation();
    const prevIndex =
      currentImageIndex === 0 ? images.Image.length - 1 : currentImageIndex - 1;
    setFullscreenImage(images.Image[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  // Function to navigate to the next image
  const nextImage = (event) => {
    event.stopPropagation();
    const nextIndex =
      currentImageIndex === images.Image.length - 1 ? 0 : currentImageIndex + 1;
    setFullscreenImage(images.Image[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  function openBase64ImageInNewTab(base64Image) {
    var newWindow = window.open();
    newWindow.document.write(
      "<iframe src='data:application/pdf;base64," +
        base64Image +
        "' width='100%' height='100%' download='caebptDocs.pdf'></iframe>"
    );
  }

  const fetchImages = async () => {
    try {
      const response = await axios.get(`${api_url}/noticeboard/` + id);
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
      {/* ... */}
      {!isLoading && (
        <>
          <div className="header">
            <h1>{images.Title}</h1>
            <h5>{images.Description}</h5>
          </div>
          <div className="image-container">
            {images.Image.map((item, index) =>
              isPdf(item) ? (
                <>
                  <a
                    href="#"
                    style={{ margin: "20px" }}
                    onClick={() => openBase64ImageInNewTab(item)}
                  >
                    <button style={{ display: "block", margin: "0 auto" }}>Open in a new Tab</button>
                  </a>
              
                  <a
                      href={`data:application/pdf;base64,${item}`}
                      download={`Notices.pdf`}
                      style={{ display: "flex", margin: "0 auto" }}
                    >
                      
                      <button style={{ display: "block", margin: "0 auto" }}>Download</button>
                    </a>
                    <h4 style={{color:"red",textAlign:"center", padding: "10 auto"}}> * If the Image / Pdf is not loaded please DOWNLOAD it</h4>
              
                  {/* <LazyLoad height={700} offset={100}> */}
                    <object
                      style={{ display: "block", margin: "0 auto" }}
                      data={`data:application/pdf;base64,${item}`}
                      width="100%"
                      height="700px"
                      type="application/pdf"
                    ></object>
                    
                  {/* </LazyLoad> */}
                </>
              ) : isImage(item) ? (
                // <LazyLoad height={200} offset={100}>
                <>
                  <img
                    // style={{ display: "block", margin: "0 auto" }}
                    src={`data:image/png;base64,${item}`}
                    alt="Tender Image"
                  />
                  <a
                    href={`data:image/png;base64,${item}`}
                    download="notices.png"
                    style={{ display: "block", margin: "0 auto" }}
                  >
                    <button>Download</button>
                  </a>
                  </>
                // </LazyLoad>
              ) : null
            )}
          </div>
          <div className="footer" />
        </>
      )}
    </div>
  );
};

export default NoticeBoardDetails;
