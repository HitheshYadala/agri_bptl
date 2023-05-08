import React, { useState, useEffect } from "react";
import "../components/Styles/MessageShifter.css";

function Messageshifter() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonials = [
    {
      name: "Dr. A. MANI",
      position: "DEAN OF AGRI. ENGG & TECH",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
      text: "Dean of Agriculture college Bapatla Dean of Agriculture college Bapatla Dean of Agriculture college Bapatla",
    },
    {
      name: "Dr. D.D.SMITH",
      position: "ASSOCIATE DEAN",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Associate Dean of Agriculture college Bapatla Dean of Agriculture college Bapatla Dean of Agriculture college Bapatla Dean of Agriculture college Bapatla",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((testimonialIndex + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [testimonialIndex]);

  const { name, position, photo, text } = testimonials[testimonialIndex];

  return (
    <div>
      <div className="testimonial-container">
        <div className="progress-bar"></div>
        <div className="fas fa-quote-left fa-quote"></div>


        <div className="fas fa-quote-right fa-quote"></div>
        <p className="testimonial">
          {text}
        </p>
        <div className="user">
          <img
            src="https://randomuser.me/api/portraits/women/45.jpg"
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
