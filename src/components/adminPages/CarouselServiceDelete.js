import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../components/Styles/CarouselDelete.scss'; // Import the CSS file for styling
import LoadingSpinner from '../LoadingSpinner';
import { api_url } from '../../App';

const CarouselServiceDelete = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [deletedItemId, setDeletedItemId] = useState(null); // Keep track of the deleted item ID

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get(`${api_url}/carousel`);
      setImages(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching images:', error.message);
    }
  };

  // Function to format date in dd-mm-yyyy format
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${api_url}/carousel/${id}`);
      setDeletedItemId(id); // Store the ID of the deleted item to trigger animation
      fetchImages(); // Refresh the images after deletion
    } catch (error) {
      console.error('Error deleting image:', error.message);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="image-gallery">
      {isLoading ? (
        // Render the loading spinner if images are still loading
        <LoadingSpinner />
      ) : images.length > 0 ? (
        // Render the gallery when images are fetched and there are images
        images.map((image) => (
          <div
            key={image._id}
            className={`image-card ${deletedItemId === image._id ? 'deleting' : ''}`}
          >
            <img src={`data:image/jpeg;base64,${image.Image}`} alt={image.Title} className="image" />
            <div className="details">
              <h2>{image.Title}</h2>
              <p>{image.Description}</p>
              <p>Start Date: {formatDate(image.StartDate)}</p>
              <p>End Date: {formatDate(image.EndDate)}</p>
              <p>Link: {image.Link}</p>
            </div>
            <button
              className="delete-button"
              onClick={() => handleDelete(image._id)}
              disabled={deletedItemId === image._id}
            >
              {deletedItemId === image._id ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        ))
      ) : (
        // Render the "No Data Found" message if there are no images
        <p style={{marginLeft:"auto", fontSize:"30px"}}>No Data Found</p>
      )}
      {error && <div className="error-alert">{error}</div>}
    </div>
  );
};

export default CarouselServiceDelete;
