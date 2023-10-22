import React, { useState } from 'react';
import axios from 'axios';
import "../../components/Styles/carouselWorker.scss"
import LoadingSpinner from '../LoadingSpinner';
import { api_url } from '../../App';

const TrackrecordUpload = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [course, setCourse] = useState('');
  const [count, setCount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
 



  const resetForm = () => {
    setCount('');
    setCourse('');
    // setPreviewImage(null);
  };


  const formDate = (data) =>{
    console.log("FORMS",data)
  }

  const handleUpload = async () => {
    try {
      setIsLoading(true); // Start loading
        
      const formData = new FormData();
    //   formData.append('image', file);
      formData.append('course', course);
      formData.append('count', count);
      
      
      formDate(formData)
      const response = await axios.post(`${api_url}/trackrecord`, formData, {
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
      setErrorMessage(`
      1. Enter all required fields (*).
      2. Still facing issues? Contact the Developer.`);
      setShowErrorModal(true);
      console.error('Error uploading data:', error.message); 
      
    }
  };

  return (
    <div className="upload-form">
      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
       <input
        type="text"
        placeholder="Count"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
  
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

export default TrackrecordUpload;



// import React, { useState } from 'react';
// import axios from 'axios';
// import "../../components/Styles/carouselWorker.scss";
// import LoadingSpinner from '../LoadingSpinner';

// const TrackrecordUpload = () => {
//   const [successMessage, setSuccessMessage] = useState('');
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [showErrorModal, setShowErrorModal] = useState(false);
//   const [course, setCourse] = useState('');
//   const [count, setCount] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const resetForm = () => {
//     setCourse('');
//     setCount('');
//   };

//   const formDate = (data) => {
//     console.log("FORMS", data);
//   };

//   const handleUpload = async () => {
//     try {
//       setIsLoading(true); // Start loading

//       const formData = new FormData();
//       formData.append('course', course);
//       formData.append('count', count);

//       formDate(formData);

//       const response = await axios.post('http://localhost:8000/trackrecord', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       setIsLoading(false); // Stop loading
//       setErrorMessage(''); // Clear any previous error
//       console.log(response.data);
//       setSuccessMessage('Upload successful!');
//       setShowSuccessModal(true);
//       resetForm();
//     } catch (error) {
//       setIsLoading(false); // Stop loading
//       setErrorMessage(`
//       1. Enter all required fields (*).
//       2. Still facing issues? Contact the Developer.`);
//       setShowErrorModal(true);
//       console.error('Error uploading data:', error.message);
//     }
//   };

//   return (
//     <div className="upload-form">
//       <input
//         type="text"
//         placeholder="Course"
//         value={course}
//         onChange={(e) => setCourse(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Count"
//         value={count}
//         onChange={(e) => setCount(e.target.value)}
//       />

//       <button onClick={handleUpload}>UPLOAD</button>

//       {isLoading && <LoadingSpinner />}

//       {showErrorModal && (
//         <div className="Errormodal-overlay">
//           <div className="Errprmodal-content">
//             <p style={{ marginBottom: "35px" }}>{errorMessage}</p>
//             <span className="Errormodal-close" onClick={() => setShowErrorModal(false)}>
//               Close
//             </span>
//           </div>
//         </div>
//       )}

//       {showSuccessModal && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <p style={{ marginBottom: "35px" }}>{successMessage}</p>
//             <span className="modal-close" onClick={() => setShowSuccessModal(false)}>
//               Close
//             </span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TrackrecordUpload;