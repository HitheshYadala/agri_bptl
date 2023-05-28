import React from "react";
import "../components/Styles/Footer.css";
function Footer() {
  return (
    <div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836.9049148905697!2d80.48629227504996!3d15.914051584743136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a3f992da032d1%3A0x3ba91bdb3b8f6963!2sANGRAU%20-%20Dr%20NTR%20College%20of%20Agricultural%20Engineering%2C%20Bapatla!5e0!3m2!1sen!2sin!4v1683741610959!5m2!1sen!2sin"
          width="100%"
          height="300"
          allowFullScreen="false"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7674.30670513878!2d80.46481946977539!3d15.9010349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a3f9e3abf50ef%3A0x1ea54ae992d7003d!2sAcharya%20N.G%20ranga%20agricultural%20university%2CAgricultural%20college!5e0!3m2!1sen!2sin!4v1675345579631!5m2!1sen!2sin"
          width="100%"
          height="300"
          allowFullScreen="false"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.613600722869!2d80.4904324!3d16.342675999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f5de62ab0da1%3A0xf3d68534dbe0600!2sSRISWASTHIK%20MULTI%20SPECIALITY%20HOSPITAL%20KAKANI!5e0!3m2!1sen!2sin!4v1668825914497!5m2!1sen!2sin"  width="100%" height="300px" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0" loading="lazy"></iframe> */}
      </div>
      <div
        className="footerText"
        style={{ backgroundColor: "#0A2451" }}
        id="contact"
      >
        <div className="row p-5" style={{ backgroundColor: "#0A2451" }}>
          <div className="col-md-5"></div>

          <div style={{ height: "50px" }}></div>
          <div className="col-md-7 pt-4">
            <div className="row ">
              <div className="col-md-2"></div>
              <div className="col-md-4">
                <h4 className="first-latter pb-1">Registered Office</h4>
                <p className="p_text">
                NH 214 A, Karlapalem road, Guntur District, Bapatla, Andhra Pradesh 522101
                </p>

                <p className="p_text">
                Dr. NTR College of Agricultural Engineering
Acharya NG Ranga Agricultural University
Bapatla- 522 101, Bapatla (Dist), Andhra Pradesh
                </p>
              </div>

              <div className="col-md-2"></div>
              <div className="col-md-4">
                <h4 className="first-latter pb-1">Contact Details</h4>
                <p className="p_text">Ph : 0864-3222851</p>
                {/* <p  style={{fontSize:"14px"}}>email : ngranga@example.com</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
