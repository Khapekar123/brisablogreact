// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// function Navbar({onLogout}){
//    const Navigate = useNavigate();

//    const handleLogout=()=>{
//       onLogout();
//       Navigate("/");
//    }
//      return(
//         <>
//         <section>
       
//         <div className='stylenav'>Welcome to my Blog App</div>  
//         <div className='logout-btn'>
        
//         </div>
       
//         </section>
//         <button onClick={handleLogout}>Logout</button>
//         </>
       
//      )
// }
// export default Navbar
import React from 'react';
import { useNavigate } from 'react-router-dom';



function Navbar({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <section className="navbar">
      <div className="navbar-content">
        <div className="stylenav">Welcome to my Blog App</div>
        <div className="logout-btn">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
