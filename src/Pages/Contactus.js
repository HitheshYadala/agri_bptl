import React from "react";
import "../components/Styles/Contactus.scss";

function ContactUs() {
  return (
    <div style={{marginTop:"50px"}} className="contact-us-container">
      <div className="contact-us-header">
        <h1 className="contactUsHeading">Contact Us</h1>
        <p>We are always happy to hear from you!</p>
      </div>

      <div className="contact-us-body">
        <div className="contact-us-info">
          <h4 style={{color: "#0A2451"}}>Address:</h4>
          <p>NH 214 A, Karlapalem road, Guntur District, Bapatla, Andhra Pradesh 522101</p>
          <p>Dr. NTR College of Agricultural Engineering, Acharya NG Ranga Agricultural University, Bapatla- 522 101, Bapatla (Dist), Andhra Pradesh</p>

          <h4 style={{color: "#0A2451"}}>Phone:</h4>
          <p>0864-3222851</p>

          {/* <h4>Email:</h4>
          <p>ngranga@example.com</p> */}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
