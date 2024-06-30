import React, { useState } from 'react'
import '../LoginRegister.css'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import {Link} from 'react-router-dom'
import Logintwo from './Logintwo';

const LoginRegister = () => {
    

    const [action ,setAction]=useState('')
    const registerLink =()=>{
        setAction('active');
    } 
     const loginLink =()=>{
        setAction('');
    }
  
  return (
     
    <div className="">
    <Logintwo/>
        <div className='btn-change'>
            <button>Turkish</button>
            <button>English</button>
        </div>
    <div  id='one' className={`wrapper  ${action}`} >
    <div className="form-box login">
        <form action="">
            <h1>User Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required />
                 <FaUserAlt className='icon' />
                     
            </div>
                 <div className='input-box'>
                 <input type="password" placeholder='Password' required />
                 <FaLock  className='icon' />
                 </div>
               
            
            <div className="remember-forgot">
                <label > <input type="checkbox" /> Remember me</label>
                <a href="#">Forgot password?</a>
            </div>
            <button type='submit'  > <Link to="/adminpages">Login</Link> </button>
            <div className="register-link">
                <p>Don't have an account ? <a href="#"  onClick={registerLink}>Register</a> </p>
            </div>
            
        </form>
    </div>
    <div className="form-box register">
        <form action="">
            <h1>Registration</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required />
                 <FaUserAlt className='icon' />
                     
            </div>
            <div className="input-box">
                <input type="email" placeholder='Email' required />
                 <FaEnvelope  className='icon' />
                     
            </div>
                 <div className='input-box'>
                 <input type="password" placeholder='Password' required />
                 <FaLock  className='icon' />
                 </div>
               
            
            <div className="remember-forgot">
                <label > <input type="checkbox" /> I agree to terms & conditions</label>
            </div>
            <button type='submit' > <Link to={'/adminpages'}> Register</Link> </button>
            <div className="register-link" >
                <p>Already have an account ? <a href="#" onClick={loginLink}>Login</a> </p>
            </div>
            
        </form>
    </div>
    </div>
</div>
  )
}

export default LoginRegister
