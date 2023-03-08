import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import imge from "../assets/Dean.png"
import wide from "../assets/wide.png"
import "../styles/carouselstyled.css"

class Photogallery extends Component {
    render() {
        return (
            <Carousel
            showThumbs={false}
            dynamicHeight={false}
            infiniteLoop={true}
            className='carousel-position'
            >
                <div>
                    <img className="images" src={wide} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img className="images" src={imge} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img className="images" src={imge} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img className="images" src={wide} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img className="images" src={imge} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img className="images" src={imge} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img className="images" src={wide} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img className="images" src={imge} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img className="images" src={imge} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        );
    }
};

export default Photogallery;