import React, { useEffect, useRef } from "react";
import "../../styles/LandingVid.css"
import vids from "../../assets/field.mp4"
import Events from "../Events";

export default function LandingVid() {
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