import React, { useEffect, useRef } from "react";
import "../styles/DemoCarousel.css"
import vids from "../assets/field.mp4"
import Events from "./Events";

export default function DemoCarousel() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="video-container">
      <video
          autoplay loop="true" width="1280" height="720"
          playsInline
          muted
          alt="All the devices"
          src={vids}
          ref={videoEl}>
  </video>


  <div class="login-container">
      <h3>Welcome</h3>
      <Events />
    </div>
    </div>
  );
}



// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Carousel } from 'react-responsive-carousel'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import img1 from "../assets/landing1.jpg"
// import img2 from "../assets/landing2.jpg"
// import img3 from "../assets/logo192.png"
// import "../styles/DemoCarousel.css"
// import vids from "../assets/field.mp4"

// class DemoCarousel extends Component {
//     render() {
//         return (

//             <div>
//                 <video
//                 style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
//                 playsInline
//                 loop
//                 muted
//                 // controls
//                 alt="Landing"
//                 src={vids}
              
//         />
//             </div>
//             // <Carousel 
                
//             //     axis='horizontal' 
//             //     showArrows={true}
//             //     autoPlay={true}
//             //     // centerMode={true}
//             //     interval={2500}
//             //     showThumbs={false}
//             //     stopOnHover={false}
//             //     showStatus={false}
//             //     infiniteLoop={true}
//             //     >
//             //     <div>
//             //         <img className='carouselImg' src={img1} />
//             //         {/* <p className="legend">Legend 1</p> */}
//             //     </div>
//             //     <div>
//             //         <img className='carouselImg' src={img2} />
//             //         {/* <p className="legend">Legend 2</p> */}
//             //     </div>
//             //     <div>
//             //         <img className='carouselImg' src={img3}/>
//             //         {/* <p className="legend">Legend 3</p> */}
//             //     </div>
              
//             // </Carousel>
//         );
//     }
// };
// export default DemoCarousel
