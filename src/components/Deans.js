import React from 'react'
import "../styles/deans.css"
import dean from "../assets/Dean.png"
import asstDean from "../assets/AssoDean.png"

export default function Deans() {
  return (
    <>
    <div className="responsiveCards">
    <div className="profile-card">
      <img className="photo" src={dean} alt="[Name]'s Photo"/>
      <div className="name">Dr. A. MANI
          DEAN OF AGRI. ENGG &amp; TECH</div>
      <div className="description">
    Dean of Agriculture college Bapatla Dean of Agriculture college Bapatla Dean of Agriculture college Bapatla 
      </div>
    </div>

    <div className="profile-card">
      <img className="photo" src={asstDean} alt="[Name]'s Photo"/>
      <div className="name">Dr. D.D.SMITH
        ASSOCIATE DEAN</div>
      <div className="description">
    Associate Dean of Agriculture college Bapatla     Dean of Agriculture college Bapatla Dean of Agriculture college Bapatla Dean of Agriculture college Bapatla 

      </div>
    </div>
    </div>
    

</>
  )
}