import React from 'react'
import { Link } from "react-router-dom";
import './Thanku.css'
import i1 from '../assests/shop.jpeg';
 document.body.style = 'background: aquamarine ;';

 function Dell() {
  
   return (
    <div>
    <h2>
    <div className="continue-btn"><Link to='/address'>Back</Link></div></h2>
    <center><h1>Cure All</h1></center>
    <img src ={i1} width="300px" height="300px"/>
    <center><h3><p >Thank You!!</p></h3></center>
    <h1>Your Order is confirmed</h1>
    <h3>WE ARE SO GLAD THAT YOU ARE CONNECTED WITH US !!</h3>

    <h1>Order Updates</h1>
    <h3>Please check your email for further instruction !!</h3>
    <center><h3>
    
    <div className="c-btn"><Link to='/product'>Continue Shopping</Link></div>
    </h3></center>
    
     </div>
    
   )
 }
 export default Dell;