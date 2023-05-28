import React from "react";
import "../components/Styles/Admission.scss";
import vc from "../assets/Vicechanellor.png";
import de from "../assets/Dean.png";
import ad from "../assets/AssoDean.jpeg";
import s12 from "../assets/staff12.png";
import s9 from "../assets/staff9.png";
import s13 from "../assets/staff13.png";
import s6 from "../assets/staff6.png";
import s3 from "../assets/staff3.png";
import s7 from "../assets/staff17.png";
import s8 from "../assets/staff8.png";
import s4 from "../assets/staff4.png";
import s14 from "../assets/staff14.png";
import s19 from "../assets/staff19.png";

function Admission() {
  const images = [
    vc,
    de,
    ad,
    // Add more image paths as needed
  ];
  const images2 = [
    s12,
    s9,
    s13,
    s6,
    s3,
    s12,
    s7,
    s8,
    s4,
    s4,
    s14,
    s3,
    s8,
    s3,
    s19,
    // Add more image paths as needed
  ];


  return (
    <>
      <div className="imageGridContainer">
        <div>
          <h1 className="admissionPage_headings" >CHancellors & Deans</h1>
          <div className="imageGrid">
            {images.map((image, index) => (
              <div key={index} className="imageWrapper">
                <div className="aspectRatioWrapper">
                  <img className="administration_images" src={image} alt={`Image ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>

        <h1 className="admissionPage_headings" >CHancellors & Deans</h1>
        <div className="imageGrid">
          {images2.map((image, index) => (
            <div key={index} className="imageWrapper">
              <div className="aspectRatioWrapper">
                <img className="administration_images" src={image} alt={`Image ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
}

export default Admission;
