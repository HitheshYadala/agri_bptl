import React from 'react'
import "../components/Styles/common.scss"
import constructionImg from "../assets/underConstruction.png"

function Studentwelfare() {
  return (
    <div className="construction-container">
      <img src={constructionImg} alt="construction" className="construction-image" />
      <h1>Student Welfare Page is Under Construction</h1>
      <p>We are working on something awesome. We'll be here soon.</p>
    </div>
  );
}

export default Studentwelfare