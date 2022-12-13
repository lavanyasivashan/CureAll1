import { Link } from "react-router-dom";
import React,{useState}from "react";
import './Main.css';


const Main=()=>{
    const [popupStyle, showPopup]= useState("hide")
    const popup=()=>{
        showPopup("login-popup")
        setTimeout(()=>showPopup("hide"),3000)
    }
    return(
        
        <div className="cover">
        
        <h1>LOGIN</h1>
            <input type="text" placeholder="USERNAME"/>
            <input type="password" placeholder="PASSWORD"/>
            <Link to='/product'><div className="login-btn" onClick={popup}>LOGIN</div></Link>
            <p className="text">Or  </p>
            <Link to='/signup'>
            <div className="alt-login">
            
                <div className="signup">
                    <img src="th.jpeg" height={"50px"} width={"200px"}></img>
                </div>
            </div></Link>
           
        </div>
        
            
    
    )
}
export default Main