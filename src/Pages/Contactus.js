import "../components/Styles/common.scss";
import "../components/Styles/Contactus.scss";
import cu from "../assets/contactus.png";
import React, { useState } from "react";

function Contactus() {
  // return (
  //   <div>
  //     <img className="contactimage" src={cu} alt="Image" />
  //   </div>
  // );

  const [showImage, setShowImage] = useState(false);

  const handleButtonClick = () => {
    setShowImage(true);
  };

  return (
    <div className="container">
      {!showImage && <button onClick={handleButtonClick} className="contactbutton">Careers</button>}
      {showImage && <img className="contactimage" src={cu} alt="Image" />}
    </div>
  );
}

export default Contactus;
