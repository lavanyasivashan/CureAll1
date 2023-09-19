import React,{useState}from 'react';
import './Signup.css';
import { Link, useNavigate} from 'react-router-dom';
import { IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Signup = () => {
    const[values,setValues]=useState({
        firstname:"",
        lastname:"",
        emailid :"",
        phno:"",
        password:"",
        confirm:"",
        });
        
        const navigate=useNavigate()
        
        const handleChange=(event)=>{
            setValues({
                ...values,
                [event.target.name]: event.target.value,
            });
        };
        const handleFormSubmit=(event)=>{
            event.preventDefault();
            navigate("/product");
       
       
    };
    
  return (
    <div className='container'>
    
    <div className='app-wrapper'>
    <Link to='/login'><IconButton><ArrowBackIcon/></IconButton></Link>
    <div><h1>SIGN UP</h1></div>
    <div><h2 className='title'>Create Account</h2>
    </div>
<form className='form-wrapper'>
    <div className='name'>
        <label className='label'>FIRST NAME : </label>
        <input 
        className='input'
         type='text'
          name='firstname'
           value={values.fullname}
            onChange={handleChange}
           />
           
    </div>
    <div className='name'>
        <label className='label'>LAST NAME : </label>
        <input className='input' type='text' name='lastname' value={values.lastname} onChange={handleChange}/>
      
    </div>
    <div className='name'>
        <label className='label'>EMAIL ID : </label>
        <input className='input' type='text' name='emailid' value={values.emailid}  onChange={handleChange}/>
       
    </div>
    <div className='name'>
        <label className='label'>PHONE NUMBER : </label>
        <input className='input' type='text' name='phno' value={values.dob}  onChange={handleChange}/>
       
    </div>
    <div className='name'>
        <label className='label'>PASSWORD: </label>
        <input className='input' type='password' name='password' value={values.password}  onChange={handleChange}/>
      
    </div>
    <div className='name'>
        <label className='label'>CONFIRM PASSWORD: </label>
        <input className='input' type='password' name='confirm' value={values.confirm}  onChange={handleChange}/>
       
    </div>
    <div>
      <Link to='/product'><button className='submit' onClick={handleFormSubmit}>GO !</button></Link>
    </div>
</form>
    </div>
    </div>
  );
};
export default Signup;