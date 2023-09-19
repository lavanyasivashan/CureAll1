import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";


 const Navbar = () => {
  return (
    <div>
    <div className='app'>
        
                <div className='home'>
                    <div className='home-text'>
                        <h1>CUPCAKES</h1>
                        <h2 className='home-text-2'>DELICIOUS CUPCAKE FLAVOURS MADE!!</h2><br/><br/><br/>
                    </div>
                    <Link to='login'><div className='home-btn'>WELCOME</div></Link>
                        
                    </div>
                </div>
            </div>
            
       
  );
}
export default Navbar;