import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Navpage from  './navpage';
import Blog from "../pages/BlogList";


const MainPages=({onLogout})=>{
    return(
        <>
        <section  className='logout'>
            <div>
                <Navbar onLogout={onLogout}/>
            </div>
        </section>
        <section>
            <div className='sidemainclass'>
                <div className='side2'>
                    <Sidebar/>
                </div>
               <div>
                <Blog/>
                
               </div>
                <div className='side3'>
                    <Navpage/>
                </div>
            </div>
            
        </section>
        </>
       
    )
}
export default MainPages;