import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import one from "../assets/Landingpage/1.jpg";
import two from "../assets/Landingpage/2.JPG";
import three from "../assets/Landingpage/3.JPG";
import four from "../assets/Landingpage/4.JPG";
import five from "../assets/Landingpage/5.JPG";
import six from "../assets/Landingpage/6.jpg";
import seven from "../assets/Landingpage/7.jpg";
import "../components/Styles/Landingcarousel.css";

class Landingcarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  render() {
    let imageStack = [one, two, three, four, five, six, seven];

    return (
      <div className="main">
        <Carousel 
          showThumbs={false} 
          infiniteLoop={true} 
          dynamicHeight={false}
          autoPlay={true}
          stopOnHover={false}
          >
          <div className="carouselImg">
            <img src={one} />
          </div>

          <div className="carouselImg">
            <img src={two} />
          </div>

          <div className="carouselImg">
            <img src={three} />
          </div>

          <div className="carouselImg">
            <img src={four} />
          </div>

          <div className="carouselImg">
            <img src={five} />
          </div>

          <div className="carouselImg">
            <img src={six} />
          </div>

          <div className="carouselImg">
            <img src={seven} />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Landingcarousel;
