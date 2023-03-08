import React from 'react'
import Deans from './Deans'
import Carousel from './Carousel'
import Footer from './Footer'
import LandingVid from './pages/LandingVid'
import { flushSync } from 'react-dom'
import VisionandMandate from './pages/VisionandMandate'



export default function Home() {


  return (
    <div>
        <div>
          <LandingVid />
          <VisionandMandate/>
            <Deans/>
            <h2 style={{fontSize:"2.0rem" , color: "#435426", textDecoration:"underline"}}>Gallery</h2>
            <div className="container" style={{display:"flex", position:"relative", width:"100%"}}>
              <Carousel/>
            </div>
            <Footer/>
            
        </div>
    </div>
  )
}
