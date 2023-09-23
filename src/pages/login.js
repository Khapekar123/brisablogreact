import React, {  useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import MainPages from './mainpage';


function Login(props) {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const navigate = useNavigate();
  
   const handleValidation=()=>{
    if(!username && !password){
      setLoginError("username and password is required");
      return false;
    }
    if(!username){
      setLoginError("Username is required");
      return false;
    }else if(/[!@#$%^&*()_+{}[\]:;<>,.?~\\]/.test(username)){
      setLoginError("special characters are not allowed");
      return false;
    }
    if(!password){
      setLoginError("password is required");
      return false;
    }else if(password.length<8){
      setLoginError("Password must have a minimum of 8 characters");
      return false;
    }if(!username && !password){
      setLoginError("username and password is required");
      return false;
    }
    return true;
   }




  const handleLogin = (event) => {

    
    event.preventDefault(); 
  
    

    if(!handleValidation()){
      return;
    }
    const data = {username,password};
    
    axios.post('https://blog-zozd.onrender.com/api/login',data)
    
    .then(response => {
    
        if(response.data){
          console.log(response.data);
         
          sessionStorage.setItem('userData',  JSON.stringify(response.data));
          props.onLogin();
          navigate("/mainpage");
          
        }

      })
      .catch(error => { 
        
        console.log('Error fetching users:', error);
      });
   
    

  };
  const handleGoogleLogin = () => {
    // Redirect the user to the Google OAuth authorization URL
    window.location.href = ' https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&client_id=47060963969-tkec9em931dv0gohp4ti485fa8coatpj.apps.googleusercontent.com%20&redirect_uri=https%3A%2F%2Fblogappfrontend-iawn.onrender';
  };

  const handleGitHubLogin = () => {
    // Redirect the user to the GitHub OAuth authorization URL
    fetch('https://blog-zozd.onrender.com/github-auth') // Update the URL as needed to match your server route
      .then((response) => response.json())
      .then((data) => {
        // Redirect the user to the GitHub OAuth authorization URL
        window.location.href = data.githubAuthUrl; // Assuming your server returns the URL as 'githubAuthUrl'
      })
      .catch((error) => {
        console.error('Error fetching GitHub authorization URL:', error);
      });
    //window.location.href = 'URL_TO_GITHUB_OAUTH_AUTHORIZATION';
  };

  return (
    <div className="login-container">
      <h2 className='login-heading'>Login</h2>
      <form className="login-form" onSubmit={handleLogin}> 
        <input
          type="text"
          className="login-input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="login-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-button"> 
          Login
        </button>
        <p className='login-p'>
          Don't have an account?{' '}<span
          className='login-span' onClick={()=> {props.togglesignup()}} style={{cursor:'pointer'}}>sign up</span>
        </p>
      </form>
  <div className="login-error-message">{loginError}</div>
  <div className="oauth-buttons">
        <button className="login-button" onClick={handleGoogleLogin}>
          Continue with Google
        </button>
        <button className="login-button" onClick={handleGitHubLogin}>
          Continue with GitHub
        </button>
      </div>
    </div>
  );
}

export default Login;
