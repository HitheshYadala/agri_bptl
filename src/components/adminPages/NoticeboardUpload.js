import React, { useState } from "react";
import axios from "axios";
import "../../components/Styles/carouselWorker.scss";
import LoadingSpinner from "../LoadingSpinner";
import { api_url } from "../../App";

const NoticeboardUpload = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [files, setFiles] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [titles, setTitles] = useState([]);
  const [startDate, setStartDate] = useState([]);
  const [endDate, setEndDate] = useState([]);
  const [link, setLink] = useState([]);
  const [isNew, setIsNew] = useState([]);
  const [oneLiner, setOneLiner] = useState("");
  const [previewImages, setPreviewImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    setFiles(selectedFilesArray);

    // Display the preview of the selected images
    const imagePromises = selectedFilesArray.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises).then((previewImages) => {
      setPreviewImages(previewImages);
    });
  };

  const resetForm = () => {
    setFiles([]);
    setDescriptions([]);
    setOneLiner("");
    setTitles([]);
    setStartDate([]);
    setEndDate([]);
    setLink([]);
    setIsNew([]);
    setPreviewImages([]);
  };

  const handleUpload = async () => {
    try {
      
      // setIsLoading(true); // Start loading

      const formData = new FormData();
      console.log("FORMDATA", files)
      // Append each file and data to the formData
      files.forEach((file, index) => {
        formData.append("images", file);
        
      });
        formData.append("descriptions", descriptions);
        formData.append("titles", titles);
        formData.append("startDate", startDate);
        formData.append("endDate", endDate);
        formData.append("link", link);
        formData.append("isNew", isNew.toString());

      

      const response = await axios.post(
        `${api_url}/noticeboard`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setIsLoading(false); // Stop loading
      setError(""); // Clear any previous error
      console.log(response.data);
      setSuccessMessage("Upload successful!");
      setShowSuccessModal(true);
      resetForm();
    } catch (error) {
      setIsLoading(false); // Stop loading
      setError("Something went wrong. Please contact the developer."); // Set the error message
      alert("Something went wrong. Please contact the developer.");
      setSuccessMessage("");
      console.error("Error uploading data:", error.message);
    }
  };


  return (
    <div className="upload-form">
      <div className="image-preview">
        {previewImages ? (
          <img src={previewImages[0]} alt="Preview" className="preview-image" />
        ) : (
          <div className="no-image-text">No Image Selected</div>
        )}
      </div>
      <input type="file" multiple onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Description"
        value={descriptions}
        onChange={(e) => setDescriptions(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        value={titles}
        onChange={(e) => setTitles(e.target.value)}
      />

      <input
        type="text"
        placeholder="oneLiner"
        value={oneLiner}
        onChange={(e) => setOneLiner(e.target.value)}
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
      <input
        type="text"
        placeholder="Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <label>
        Is New:
        <input
          type="checkbox"
          checked={isNew}
          onChange={() => setIsNew(!isNew)}
        />
      </label>
      <button onClick={handleUpload}>UPLOAD</button>

      {isLoading && <LoadingSpinner />}
      {error && <div className="error-alert">{error}</div>}
      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p style={{ marginBottom: "35px" }}>{successMessage}</p>
            <span
              className="modal-close"
              onClick={() => setShowSuccessModal(false)}
            >
              Close
            </span>
          </div>
        </div>
      )}

      <div className="image-preview-grid">
        {previewImages.map((img, index) => (
          <img key={index} style={{width:"120px", height:"120px", margin:"10px"}} src={img} alt={`Preview ${index}`
          
        } className="grid-image" />
        ))}
      </div>
    </div>
  );
};

export default NoticeboardUpload;
