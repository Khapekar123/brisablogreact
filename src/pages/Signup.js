
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup  (props)  {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');


  const navigate = useNavigate();


  const handleValidation = () => {
    if (!username || !password) {
      setLoginError('Username and password are required');
      return false;
    }
    if (/[!@#$%^&*()_+{}[\]:;<>,.?~\\]/.test(username)) {
      setLoginError('Special characters are not allowed in the username');
      return false;
    }
    if (password.length < 8) {
      setLoginError('Password must have a minimum of 8 characters');
      return false;
    }
    return true;
  };

 
  const handleSignup = async (e) => {
    e.preventDefault();

    if (!handleValidation()) {
      return;
    }

   
    const data = {
      username,
      email,
      password,
    };

    try {
   
      const response = await axios.post('https://blog-zozd.onrender.com/users/register', data);

      console.log('Response status:', response.status);

      if (response.status === 200) {
     
        props.onLogin();
       
        navigate('/mainpage');
      } else {
        console.log('Failed to post');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Sign Up</h2>
      <form className="signup-form" onSubmit={handleSignup}>
        <input
          className="signup-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="signup-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="signup-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="signup-button" type="submit">
          Sign Up
        </button>
        <p className="signup-p">
          Already have an account?{' '}
          <span
            className="signup-span"
            onClick={() => {
              
              props.togglesignup();
            }}
            style={{ cursor: 'pointer' }}
          >
            Log In
          </span>
        </p>
      </form>
      <div className="signup-error-message">{loginError}</div>
    </div>
  );
};

export default Signup;