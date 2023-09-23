
import React, { useState } from "react";
import "./App.css";
import Login from "./pages/login";

import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
//import Home from "./pages/home";
import Admin from "./pages/AdminDashboard";
import Blog from "./pages/BlogList";
import Signup from "./pages/Signup";
import MainPages from "./components/MainPage";
//import GoogleLogin from 'react-oauth/google';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const toggleSignup = () => {
    setShowLogin(!showLogin);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  }
  const handleLogout = () => {
    setIsAuthenticated(false);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={showLogin ?
            (isAuthenticated ? (
              <Navigate to="/mainpage" />
            ) : (
              <Login onLogin={handleLogin} togglesignup={toggleSignup}/>
            ))
            :
        
           ( isAuthenticated ? (
              <Navigate to="/mainpage" />
            ) : (
              <Signup onLogin={handleLogin} togglesignup={toggleSignup} />
            ))
            }
        />
        <Route
          path="/mainpage"
          element={isAuthenticated ? <MainPages onLogout={handleLogout} /> : <Navigate to="/" />}
        />
        <Route
          path="/admin"
          element={isAuthenticated ? <Admin /> : <Navigate to="/" />}
        />
        <Route
          path="/blog"
          element={isAuthenticated ? <Blog /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;