
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup  (props)  {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [loginError, setLoginError] = useState('');


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
  // const handleGoogleSignup = () => {
  //   // Redirect the user to the Google OAuth authorization URL
  //   window.location.href = ' https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&client_id=47060963969-tkec9em931dv0gohp4ti485fa8coatpj.apps.googleusercontent.com%20&redirect_uri=https%3A%2F%2Fblogappfrontend-iawn.onrender';
  // };

  // const handleGitHubSignup = () => {
  //   // Redirect the user to the GitHub OAuth authorization URL
  //   fetch('https://blog-zozd.onrender.com/github-auth') // Update the URL as needed to match your server route
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Redirect the user to the GitHub OAuth authorization URL
  //       window.location.href = data.githubAuthUrl; // Assuming your server returns the URL as 'githubAuthUrl'
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching GitHub authorization URL:', error);
  //     });
  //   //window.location.href = 'URL_TO_GITHUB_OAUTH_AUTHORIZATION';
  // };
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
      {/* <div className="signup-error-message">{loginError}</div>
      <div className="oauth-buttons">
        <button className="signup-button" onClick={handleGoogleSignup}>
          Sign Up with Google
        </button>
        <button className="signup-button" onClick={handleGitHubSignup}>
          Sign Up with GitHub
        </button>
      </div>
    </div> */}
    </div>
  );
};

export default Signup;
