import React from 'react'
import "../components/Styles/common.scss"
import constructionImg from "../assets/underConstruction.png"

function Publications() {
  return (
    <div className="construction-container">
      <img src={constructionImg} alt="construction" className="construction-image" />
      <h1>Publications Page is Under Construction</h1>
      <p>We are working on something awesome. We'll be here soon.</p>
    </div>
  );
}

export default Publications