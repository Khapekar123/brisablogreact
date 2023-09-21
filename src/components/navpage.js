  import React from "react";
  import {Routes,Route} from "react-router-dom";
  import Admin from "../pages/AdminDashboard";
  // import Home from "../pages/home";
  import Blog from "../pages/BlogList";
  // import Signup from "../pages/Signup";
  // import MainPages from "./MainPage";


  const Navpage=()=>{
      return(
          <>
          <section>
            <Routes>
            {/* <Route path="/"  element={<Home/>}/>   */}
            <Route path="/admin"  element={<Admin/>}/>  
            <Route path="/blog" element={<Blog/>}/>  
            {/* <Route path="/Signup" element={<Signup/>}/>  */}
            {/* <Route path="/mainpage" element={<MainPages/>}/> */}
            </Routes> 
          </section>
          </>
      )
  }
  export default Navpage;