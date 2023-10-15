import React, { Component } from "react";
import axios from "axios";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { api_url } from "../App";
import "../components/Styles/photos.scss"
import "react-image-lightbox/style.css";
import "../components/Styles/masionry.scss"


export default class ImageGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
      images: [],
      loading: true
    };
  }

  componentDidMount() {
    // Fetch images from an API using Axios
    axios
      .get(`${api_url}/photogallery`)
      .then((response) => {
        const fetchedImages = response.data; // Replace with the actual response data structure
        const dataUrls = fetchedImages.map((item) => this.base64ToDataUrl(item.Image));
        this.setState({loading: false, images: dataUrls });
       
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }

  base64ToDataUrl(base64) {
    return `data:image/jpeg;base64,${base64}`;
  }

  render() {
    const { photoIndex, isOpen, images } = this.state;

    return (
      <div style={{margin:"4%"}}>
         <div>
        {this.state.loading ? (
          <div>Loading...</div>
        ) : images.length === 0 ? (
          <div>No data found</div>
        ) : (
          <div className="image-grid">
            {this.state.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index}`}
                onClick={() => this.setState({ isOpen: true, photoIndex: index })}
              />
            ))}
          </div>
        )}
      </div>
<div className="lightBoxDiv"> 
        {isOpen && (
          <Lightbox
            style={{position : "absolute", Zindex:"1000"}}
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
        </div>
      </div>
    );
  }
}
