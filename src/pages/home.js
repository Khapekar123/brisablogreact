
// import React, { useState } from 'react';
// import axios from 'axios'; 
// import { useNavigate } from 'react-router-dom';



// const Home = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleLogin = async () => {
//     if (!username || !password) {
//       alert('Please enter both username and password');
//       return;
//     }

//     try {
      
//       const response = await axios.post('http://localhost:2000/api/login', {
//         username,
//         password,
//       });

//       console.log(response);

//       if (response.status === 200) {
//         sessionStorage.setItem('userData', JSON.stringify(response.data));
//         alert('Login successful!');
//         navigate('/mainpage');
//       } else if (response.status === 401) {
//         alert('Login failed. Invalid credentials.');
//       } else {
//         alert('Login failed. Please try again later.');
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//       alert('An error occurred while logging in. Please try again later.');
//     }
//   };
//   const toggleSignup = () => {
//     navigate('/signup'); 
//   };
//   return (
//     <section>
//       <div className='homestyle'>
//         <h2>Login</h2>
//         <form>
//           <div>
//             <label htmlFor='username'>Username:</label>
//             <input
//               type='text'
//               id='username'
//               value={username}
//               onChange={handleUsernameChange}
//             />
//           </div>
//           <div>
//             <label htmlFor='password'>Password:</label>
//             <input
//               type='password'
//               id='password'
//               value={password}
//               onChange={handlePasswordChange}
//             />
//           </div>
//           <button type='button' onClick={handleLogin}>
//             Login
//           </button>
//           <p className='signup-p'>
//           Dont have an account?{' '}
//           <span className="signup-span" onClick={toggleSignup} style={{ cursor: 'pointer' }}>
//             SignUp
//           </span>
//         </p>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Home;

