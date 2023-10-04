import React, {useEffect, useState} from "react";
import "../components/Styles/Admission.scss";
import { api_url } from "../App";
import axios from "axios";



function Admission() {
  // const images = [vc, de, ad];
  const imagesNames = ["Dr. A. VISHNU VARDHAN REDDY", "Dr. A. MANI", "Dr. D.D.SMITH"]
  const imagesDeseg = ["VICE-CHANCELLOR","DEAN OF AGRI. ENGG; Technology","ASSOCIATE DEAN"]
  // const images2 = [
  //  s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17,s18,s19
  // ];



  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [deletedItemId, setDeletedItemId] = useState(null); // Keep track of the deleted item ID

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get(`${api_url}/staff`);
      setImages(response.data);
      setIsLoading(false);
      test()
    } catch (error) {
      console.error('Error fetching images:', error.message);
    }
  };

  const test = () => {
    console.log("STAFF",images)
  }


  const deans = images.filter((member) => member.Designation === "DEAN OF AGRI. ENGG & TECH");

  const viceChancellor = images.filter((member) => member.Designation === "VICE-CHANCELLOR");

  const associateDeans = images.filter(
    (member) => member.Designation === "ASSOCIATE-DEAN"
  );

  const otherStaff = images.filter(
    (member) => member.Designation !== "DEAN" && member.Designation !== "ASSOCIATE-DEAN" && member.Designation !== "VICE-CHANCELLOR"
  );

  return (
    <>
    {isLoading !== true ? 
      <div className="imageGridContainer">
        <div>
          {/* <h1 className="admissionPage_headings">Chancellors & Deans</h1> */}

          <div className="imageGrid1 ">
            {viceChancellor.map((viceChancellor, index) => (
              <div key={index} className="imageWrapper1">
                <div className="aspectRatioWrapper1">
                  <img
                    className="administration_images1"
                    src={`data:image/jpeg;base64,${viceChancellor.Image}`}
                    alt={`Dean Image ${index + 1}`}
                  />
                </div>
                <p className="imageMatter">{viceChancellor.Name}</p>
                <p className="imageMatter">{viceChancellor.Designation}</p>
              </div>
            ))}
          </div>

          
          <div className="imageGrid1 ">
            {deans.map((dean, index) => (
              <div key={index} className="imageWrapper1">
                <div className="aspectRatioWrapper1">
                  <img
                    className="administration_images1"
                    src={`data:image/jpeg;base64,${dean.Image}`}
                    alt={`Dean Image ${index + 1}`}
                  />
                </div>
                <p className="imageMatter">{dean.Name}</p>
                <p className="imageMatter">{dean.Designation}</p>
              </div>
            ))}
          </div>

          <div className="imageGrid1 ">
            {associateDeans.map((associateDean, index) => (
              <div key={index} className="imageWrapper1">
                <div className="aspectRatioWrapper1">
                  <img
                    className="administration_images1"
                    src={`data:image/jpeg;base64,${associateDean.Image}`}
                    alt={`Associate Dean Image ${index + 1}`}
                  />

                </div>
                <p className="imageMatter">{associateDean.Name}</p>
                <p className="imageMatter">{associateDean.Designation}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="admissionPage_headings">Our Staff</h1>
          <div className="imageGrid">
            {otherStaff.map((staff, index) => (
              <div key={index} className="imageWrapper">
                <div className="aspectRatioWrapper">
                  <img
                    className="administration_images"
                    src={`data:image/jpeg;base64,${staff.Image}`}
                    alt={`Image ${index}`}
                  />
                  
                </div>
                <div className="details">
        <h5 className= "staffName" style={{ margin: "5px 0" }}>Name : {staff.Name}</h5>
        <h6 className="staffDetails" style={{ margin: "2px 0" }}>Desg : {staff.Designation}</h6>
        <h6 className="staffDetails" style={{ margin: "2px 0" }}>Dept : {staff.Description}</h6>
        <h6 className="staffDetails" style={{ margin: "2px 0" }}>Contact : {staff.Contactnumber}</h6>
      </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      : <h3 style={{textAlign:"center", margin:"0 , auto"}}>Loading...</h3> }
    </>
  );
}

export default Admission;
