import "../components/Styles/common.scss";
import "../components/Styles/Contactus.scss";
import cu from "../assets/contactus.png";
import React, { useState } from "react";
// import "../components/Styles/common.scss"
import constructionImg from "../assets/underConstruction.png"

function Contactus() {
  // return (
  //   <div>
  //     <img className="contactimage" src={cu} alt="Image" />
  //   </div>
  // );

  // const [showImage, setShowImage] = useState(false);

  // const handleButtonClick = () => {
  //   setShowImage(true);
  // };

  return (
    // <div className="container">
    //   {!showImage && <button onClick={handleButtonClick} className="contactbutton">Careers</button>}
    //   {showImage && <img className="contactimage" src={cu} alt="Image" />}
    // </div>
  
      <div className="construction-container">
        <img src={constructionImg} alt="construction" className="construction-image" />
        <h1>Publications Page is Under Construction</h1>
        <p>We are working on something awesome. We'll be here soon.</p>
      </div>

  );
}

export default Contactus;
