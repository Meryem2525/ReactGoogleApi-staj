import React from 'react'
import './Logintwo.css'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {Link} from 'react-router-dom'

const Logintwo = () => {
  return (
    <div>
       <div className={`wrapper `} >
    <div className="form-box login">
        <form action="">
            <h1>Admin Login</h1>
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
            <button type='submit'  > <Link to="/yoneticiMap">Login</Link> </button>
           
            
        </form>
    </div>
    </div>
    </div>
  )
}

export default Logintwo
