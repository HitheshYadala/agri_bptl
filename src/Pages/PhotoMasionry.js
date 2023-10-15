import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
// import img1 from "../assets/Dean.png";
// import img2 from "../assets/AssoDean.jpeg"
import { images, CustomImage } from "./images";
import { useNavigate } from 'react-router-dom';
// import "../components/Styles/Hiringpartners.scss";
import "../components/Styles/masionry.scss"
export default function App() {
  const [index, setIndex] = useState(-1);
  const navigate = useNavigate();

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index, item) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  const handleImageRout = () => {
    navigate('/gallery');
  }
  



  return (

    <>
      <h1 className="photogallery">Photo Gallery</h1>
      <div className="gallery-container">
        <Gallery
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
        />
        <button style={{marginTop:"20px"}} onClick={() => handleImageRout()}>View more</button>
        {!!currentImage && (
          /* @ts-ignore */
          <Lightbox
            mainSrc={currentImage.original}
            imageTitle={currentImage.caption}
            mainSrcThumbnail={currentImage.src}
            nextSrc={nextImage.original}
            nextSrcThumbnail={nextImage.src}
            prevSrc={prevImage.original}
            prevSrcThumbnail={prevImage.src}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
          />
        )}
      </div>
    </>
  );
}
