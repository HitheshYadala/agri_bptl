import React, { useState, useEffect } from "react";
import "../components/Styles/MessageShifter.css";
import dean from "../assets/Dean.png"
import assoDean from "../assets/AssoDean.jpeg"

function Messageshifter() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonials = [
    {
      name: "Dr. A. MANI",
      who : "Deans Message",
      position: "DEAN OF AGRI. ENGG & TECH",
      photo:dean,
      text: "Dean of Agriculture college Bapatla Dean of Agriculture college Bapatla Dean of Agriculture college Bapatla",
    },
    {
      name: "Dr D. D. Smith, M.Tech., Ph.D.",
      who : "Asso. Deans Message",
      position: "ASSOCIATE DEAN",
      photo: assoDean,
      text: "Dr. NTR College of Agricultural Engineering, Bapatla had a humble beginning in the year 1983 in the premises of Agricultural College, Bapatla in the then Department of Agricultural Engineering.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((testimonialIndex + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [testimonialIndex]);

  const { name, position, photo, text, who } = testimonials[testimonialIndex];

  return (
    <div className="messageshifter-container">
      
      <div className="testimonial-container">
        <div className="progress-bar"></div>
        <div className="fas fa-quote-left fa-quote"></div>
        <div className="fas fa-quote-right fa-quote"></div>
        <h1>{who}</h1>
        <p className="testimonial">
          {text}  <p><a style={{color:"gray", textDecoration:"none"}}href="#">Read more...</a></p>
        </p>
        <div className="user">
          <img
            src={photo}
            alt="user"
            className="user-image"
          />
          <div className="user-details">
            <h4 className="username">{name}</h4>
            <p className="role">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messageshifter;
