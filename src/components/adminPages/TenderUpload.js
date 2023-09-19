import React, { useState } from 'react';
import axios from 'axios';
import "../../components/Styles/carouselWorker.scss"
import LoadingSpinner from '../LoadingSpinner';
import { api_url } from '../../App';

const TenderUpload = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [previewImage, setPreviewImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
 

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);

    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Display the preview of the selected image
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreviewImage(null);
    }
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const resetForm = () => {
    setFile(null);
    setDescription('');
    setTitle('');
    setStartDate('');
    setEndDate('');
    setPreviewImage(null);
  };


  const formDate = (data) =>{
    console.log("FORMS",data)
  }

  const handleUpload = async () => {
    try {
      setIsLoading(true); // Start loading
        
      const formData = new FormData();
      formData.append('image', file);
      formData.append('description', description);
      formData.append('title', title);
      formData.append('startDate', startDate);
      formData.append('endDate', endDate);
      
      formDate(formData)
      const response = await axios.post(`${api_url}/tender`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setIsLoading(false); // Stop loading
      setErrorMessage(''); // Clear any previous error
      console.log(response.data);
      setSuccessMessage('Upload successful!');
      setShowSuccessModal(true)
      resetForm();
    } catch (error) {
      setIsLoading(false); // Stop loading
      setErrorMessage(`1. Upload .jpeg, .jpg, .png formats only.
      2. Enter all required fields (*).
      3. Avoid image sizes more than 4mb.
      4. Still facing issues? Contact the Developer.`);
      setShowErrorModal(true);
      console.error('Error uploading data:', error.message); 
      
    }
  };

  return (
    <div className="upload-form">
      <div className="image-preview">
        {previewImage ? (
          <img src={previewImage} alt="Preview" className="preview-image" />
        ) : (
          <div className="no-image-text">No Image Selected</div>
        )}
      </div>
      <input type="file" onChange={handleFileChange} />

      
      {/* <div className="boxShadow box_width" style={{ width: '70%', height: 'auto', margin: 'auto' }}> */}
        
        {/* Rest of your component */}
      {/* </div> */}

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date" // Use 'date' type for the start date input
        placeholder="Start Date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date" // Use 'date' type for the end date input
        placeholder="End Date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
  
      {/* <label>
        Is New:
        <input type="checkbox" checked={isNew} onChange={() => setIsNew(!isNew)} />
      </label> */}
      <button onClick={handleUpload}>UPLOAD</button>

      {isLoading && <LoadingSpinner/>}

      {showErrorModal &&  (
        <div className="Errormodal-overlay">
          <div className="Errprmodal-content">
            <p style={{marginBottom:"35px"}}>{errorMessage}</p>
            <span className="Errormodal-close" onClick={() => setShowErrorModal(false)}>
              Close
            </span>
          </div>
        </div>
      )}




      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p style={{marginBottom:"35px"}}>{successMessage}</p>
            <span className="modal-close" onClick={() => setShowSuccessModal(false)}>
              Close
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TenderUpload;
