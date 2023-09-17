import React from 'react';

const LoadingSpinner = () => {
  return (
    <div
      className="loading-spinner-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background
        zIndex: 9999, // Higher zIndex to place it above other content
      }}
    >
      <div
        className="loading-spinner"
        style={{
          border: '4px solid rgba(0, 0, 0, 0.3)',
          borderTop: '4px solid #3498db',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          animation: 'spin 1s linear infinite',
        }}
      ></div>
      <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#555', marginTop: '15px' }}>LOADING...</p>
    </div>
  );
};

export default LoadingSpinner;
