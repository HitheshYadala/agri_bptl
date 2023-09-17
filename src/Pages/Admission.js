import React from "react";
import "../components/Styles/Admission.scss";
import vc from "../assets/Vicechanellor.png";
import de from "../assets/Dean.png";
import ad from "../assets/AssoDean.jpeg";
import s1 from "../assets/staff1.png";
import s2 from "../assets/staff2.png";
import s3 from "../assets/staff3.png";
import s4 from "../assets/staff4.png";
import s5 from "../assets/staff5.png";
import s6 from "../assets/staff6.png";
import s7 from "../assets/staff7.png";
import s8 from "../assets/staff8.png";
import s9 from "../assets/staff9.png";
import s10 from "../assets/staff10.png";
import s11 from "../assets/staff11.png";
import s12 from "../assets/staff12.png";
import s13 from "../assets/staff13.png";
import s14 from "../assets/staff14.png";
import s15 from "../assets/staff15.png";
import s16 from "../assets/staff16.png";
import s17 from "../assets/staff17.png";
import s18 from "../assets/staff18.png";
import s19 from "../assets/staff19.png";



function Admission() {
  const images = [vc, de, ad];
  const imagesNames = ["Dr. A. VISHNU VARDHAN REDDY", "Dr. A. MANI", "Dr. D.D.SMITH"]
  const imagesDeseg = ["VICE-CHANCELLOR","DEAN OF AGRI. ENGG; Technology","ASSOCIATE DEAN"]
  const images2 = [
   s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17,s18,s19
    // Add more image paths as needed
  ];

  return (
    <>
      <div className="imageGridContainer">
        <div>
          {/* <h1 className="admissionPage_headings">Chancellors & Deans</h1> */}
          <div className="imageGrid1 ">
            {images.map((image, index) => (
              <div key={index} className="imageWrapper1">
                <div className="aspectRatioWrapper1">
                  <img className="administration_images1" src={image} alt={`Image ${index + 1}`} />
                  
                </div>
                <p className="imageMatter">{imagesNames[index]}</p>
                  <p className="imageMatter">{imagesDeseg[index]}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="admissionPage_headings">Our Staff</h1>
          <div className="imageGrid">
            {images2.map((image, index) => (
              <div key={index} className="imageWrapper">
                <div className="aspectRatioWrapper">
                  <img className="administration_images" src={image} alt={`Image ${index}`} />
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
