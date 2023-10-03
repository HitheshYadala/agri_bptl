import { backdropClasses } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Logout.scss"

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn'); // Remove authentication state
        // setIsLoggedIn(false);
         // Set isLoggedIn to false
        navigate('/login'); // Redirect to the login page after logout
      };

  return (
    <div>
      <button className="bn632-hover bn28" style={{color:"white", borderColor:"#f15e64"}} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
