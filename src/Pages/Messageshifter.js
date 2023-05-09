import React, { useState, useEffect } from "react";
import "../components/Styles/MessageShifter.css";
import dean from "../assets/Dean.png"
import assoDean from "../assets/AssoDean.png"

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
      name: "Dr. D.D.SMITH",
      who : "Asso. Deans Message",
      position: "ASSOCIATE DEAN",
      photo: assoDean,
      text: "Associate Dean of Agriculture college Bapatla Dean of Agriculture college Bapatla Dean of Agriculture college Bapatla Dean of Agriculture college Bapatla",
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
    <div>
      
      <div className="testimonial-container">
        <div className="progress-bar"></div>
        <div className="fas fa-quote-left fa-quote"></div>
        <div className="fas fa-quote-right fa-quote"></div>
        <h1>{who}</h1>
        <p className="testimonial">
          {text}
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
