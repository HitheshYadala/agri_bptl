import React from 'react';
import { useLocation } from 'react-router-dom';
import '../components/Styles/profileView.scss'; // Create a separate CSS file for styling

function ProfileView() {
  const location = useLocation();
  const { imageData } = location.state;
  console.log("SUCCESs", imageData)

  // Ensure that imageData exists before rendering
  if (!imageData) {
    return <div>No data found for this profile.</div>;
  }

  return (
    <div className="profile-view-container">
      <div className="profile-image-container">
        <img
          src={`data:image/jpeg;base64,${imageData.Image}`}
          alt={imageData.Name}
          className="profile-image"
        />
      </div>
      <div className="profile-details">
        <h1>{imageData.Name}</h1>
        <h2>{imageData.Designation}</h2>
        <h4>{imageData.Mailid}</h4>
        <h4>{imageData.Contactnumber}</h4>
        <p>{imageData.Description}</p>
      </div>
    </div>
  );
}

export default ProfileView;
