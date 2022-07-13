import React from 'react'
import {Link} from 'react-router-dom'
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
                    +880
                  </span>
                  <input type='text' name='userName' placeholder='Please  enter your mobile number' />
                </div>

                <div className='box'>
                  <input type='text' name='password' placeholder='Please enter your password' />
                </div>

                <div className='box'>
                  <input type='text' name='password' placeholder='Please confirm the password' />
                </div>

                <div className='box'>
                  <input type='text' name='password' placeholder='Please enter a nickname' />
                </div>

                <div className='box'>
                  <input type='text' name='password' placeholder='Please enter your invitation code' />
                </div>

                <br></br>

                <div className='box submit'>
                  <input type='submit' name='submit' value='Submit' />
                </div>

                <div className='signup'>
                  <Link to='/login'>Already have a account ?</Link>
                </div>

              </form>
            </div>
        </section>
    </>
  )
}

export default Login