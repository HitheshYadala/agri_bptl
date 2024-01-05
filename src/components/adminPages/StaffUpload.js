import React, { useState } from 'react';
import axios from 'axios';
import "../../components/Styles/carouselWorker.scss"
import LoadingSpinner from '../LoadingSpinner';
import { api_url } from '../../App';

const StaffUpload = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('')
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [dob, setDob] = useState('');
  const [mailid, setMailid] = useState('');
  const [contact, setContact] = useState('');
  const [previewImage, setPreviewImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

    const [headings, setHeadings] = useState([]);
  const [newHeading, setNewHeading] = useState('');
  const [descriptions, setDescriptions] = useState([]);
  const [newDescription, setNewDescription] = useState('');


  const addEntry = () => {
    if (newHeading.trim() !== '' && newDescription.trim() !== '') {
      setHeadings([...headings, newHeading]);
      setDescriptions([...descriptions, newDescription]);
      setNewHeading('');
      setNewDescription('');
    }
  };

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

  const resetForm = () => {
    setFile(null);
    setDescription('');
    setDesignation('');
    setName('');
    setStartDate('');
    setEndDate('');
    setDob('');
    setMailid('');
    setContact('');
    setPreviewImage(null);
  };


  const formDate = (data) =>{
    console.log("FORMS",data)
  }

  const handleUpload = async () => {
    try {
      setIsLoading(true); // Start loading
      setHeadings([]);
      setDescriptions([]);
        
      const formData = new FormData();
      formData.append('image', file);
      formData.append('description', description);
      formData.append('designation', designation);
      formData.append('name', name);
      formData.append('startDate', startDate);
      formData.append('endDate', endDate);
      formData.append('dob', dob);
      formData.append('mailid', mailid);
      formData.append('contactnumber', contact);
      formData.append('headings', headings); // Sending headings as JSON string
      formData.append('descriptions', descriptions);
      // formData.append('department', department);

      
      formDate(formData)
      const response = await axios.post(`${api_url}/staff`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setIsLoading(false); // Stop loading
      setErrorMessage(''); // Clear any previous error
      // console.log(response.data);
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
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Designation"
        value={designation}
        onChange={(e) => setDesignation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
        type="date"
        placeholder="Dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <input
        type="text"
        placeholder="Mailid"
        value={mailid}
        onChange={(e) => setMailid(e.target.value)}
      />
      <input
        type="text"
        placeholder="Contactnumber"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />

      <input
        type="text"
        placeholder="Heading"
        value={newHeading}
        onChange={(e) => setNewHeading(e.target.value)}
      />
      <textarea
        style={{width:"90%", height:"100px"}}
        placeholder="About Heading"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button onClick={addEntry}>Add Entry</button>

      {/* Display added entries */}
      {headings.length > 0 && (
        <div className="table-of-contents">
          <h2>Table of Contents</h2>
          <ul>
            {headings.map((heading, index) => (
              <li key={index}>
                <h3>{heading}</h3>
                <p>{descriptions[index]}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
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

export default StaffUpload;
