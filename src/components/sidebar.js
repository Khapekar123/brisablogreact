import React from 'react';
// import Admin from '../pages/AdminDashboard';
// import Blog from '../pages/BlogList';
// import Signup from '../pages/Signup';

import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <>
            <section>
                <div className='side'>
                            <br></br>
                        <Link to="/" className="link1">HOME</Link> 
                        <Link to="/admin" className="link2">Admin</Link> 
                        <Link to="/blog" className="link3">Blog</Link>   
                        <Link to="/Signup" className="link4">Signup</Link>
                        {/* <div className='logoutbtn'>LOGOUT</div> */}
                </div>
            </section>
        </>
    );
}

export default Sidebar;