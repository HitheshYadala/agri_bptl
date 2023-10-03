import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform your login validation here, e.g., check if username and password are correct
    if (username === 'admin' && password === 'password') {
        localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true); // Set isLoggedIn to true if login is successful
      navigate('/adminpanel'); // Redirect to the desired route
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='login-container'>
      <h2 style={{margin:'20px'}}>Login</h2>
      <div className='input-container'>
        <label>Username:  </label>
        <input className='input' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:  </label>
        <input className='input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div >
        <button className="buttonLogin" style={{margin:'20px'}} onClick={handleLogin}>Login</button>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
