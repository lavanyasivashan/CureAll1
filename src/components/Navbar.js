import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";


 const Navbar = () => {
  return (
    <div>
    <div className='app'>
        <div className='row'>
            <div className='col-11'>
                <div className='home'>
                    <div className='home-text'>
                        <h1>CURE ALL</h1>
                        <h1 className='home-text-2'> COMMITED TO CARE</h1><br/><br/><br/>
                        <h2>!!! WORKING TOGETHER FOR A HEALTHIER WORLD !!!</h2>
                    </div>
                    <Link to='login'><div className='home-btn'>WELCOME</div></Link>
                        
                    </div>
                </div>
            </div>
            
        </div>
   
    </div>
  );
}
export default Navbar;