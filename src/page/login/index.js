import React from 'react'
import {Link} from 'react-router-dom'
import { FaUserShield } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
// style
import './components/style/main.css'

const Login = () => {
  const images = [
    {"img" : require("./components/img/flag.jpg")},
    {"img" : require("./components/img/logo.jpg")}
  ]
  return (
    <>
        <section id="login">
            <div id='laguage'>
              <img  src={images[0].img}/>
            </div>
           
            <div className='loginForm'>
            
              <form className='form' action='' method='post'>
                <div id='logo'>
                  <img  src={images[1].img}/>
                </div>
                <div className='box'>
                  <span>
                    <FaUserShield />
                  </span>
                  <input type='text' name='userName' placeholder='+0 Your Number' />
                </div>

                <div className='box'>
                  <span>
                    <RiLockPasswordFill />
                  </span>
                  <input type='text' name='password' placeholder='Your password' />
                </div>

                <a className='forget'> Forget Password?</a>
                <br></br>

                <div className='box submit'>
                  <input type='submit' name='submit' value='Submit' />
                </div>

                <div className='signup'>
                  <Link to='/signup'>Registation Now</Link>
                </div>

              </form>
            </div>
        </section>
    </>
  )
}

export default Login