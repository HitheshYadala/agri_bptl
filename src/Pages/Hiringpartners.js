import React from 'react'
import "../components/Styles/Hiringpartners.scss"
import p1 from "../assets/Hiringpartners/p1.png"
import p2 from "../assets/Hiringpartners/p2.png"
import p3 from "../assets/Hiringpartners/p3.png"
// import p4 from "../assets/Hiringpartners/p4.png"
import p5 from "../assets/Hiringpartners/p5.png"
import p6 from "../assets/Hiringpartners/p6.png"
import p7 from "../assets/Hiringpartners/p7.png"
import p12 from "../assets/Hiringpartners/p12.png"
import p13 from "../assets/Hiringpartners/p13.png"
import p14 from "../assets/Hiringpartners/p14.png"
import p15 from "../assets/Hiringpartners/p15.png"


function Hiringpartners() {
  return (
    <>
    <h1 className="Hiring-partners">Hiring Partners</h1>
        <div class="marquee">
  <div class="marquee-content"> 

  
    <div class="marquee-item">
      <img src={p1} alt=""/>
    </div>
    
    <div class="marquee-item">
      <img src={p2} alt=""/>
    </div>

    <div class="marquee-item">
      <img src={p3} alt=""/>
    </div>
    

    {/* <div class="marquee-item">
      <img src={p4} alt=""/>
    </div> */}

    <div class="marquee-item">
      <img src={p5} alt=""/>
    </div>


    <div class="marquee-item">
      <img src={p6} alt=""/>
    </div>


    <div class="marquee-item">
      <img src={p7} alt=""/>
    </div>

    <div class="marquee-item">
      <img src={p12} alt=""/>
    </div>


    <div class="marquee-item">
      <img src={p13} alt=""/>
    </div>


    <div class="marquee-item">
      <img src={p14} alt=""/>
    </div>

    <div class="marquee-item">
      <img src={p15} alt=""/>
    </div>

  </div>
</div>
</>

  )
}

export default Hiringpartners