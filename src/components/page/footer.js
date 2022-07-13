import React from 'react'
import { NavLink } from 'react-router-dom'
// style 
import './style/footer.css'
const Footer = () => {
    const images = [
        {"img" : require('./img/icon-home-1.png')},
        {"img" : require('./img/icon-home-2.png')},
        {"img" : require('./img/icon-qd1.png')},
        {"img" : require('./img/icon-qd.png')},
        {"img" : require('./img/icon-record-1.png')},
        {"img" : require('./img/icon-record-2.png')},
        {"img" : require('./img/icon-service-1.png')},
        {"img" : require('./img/icon-service-2.png')},
        {"img" : require('./img/icon-user-1.png')},
        {"img" : require('./img/icon-user-2.png')}
    ]
  return (
    <>
        <section className='footer'>
            <ul>
                <li>
                    <NavLink to='/'><img src={images[0].img} /></NavLink>
                </li>
                <li>
                    <NavLink to='/'><img src={images[4].img} /></NavLink>
                </li>
                <li>
                    <NavLink to='/'><img className='middleMan' src={images[2].img} /></NavLink>
                </li>
                <li>
                    <NavLink to='/'><img src={images[6].img} /></NavLink>
                </li>
                <li>
                    <NavLink to='/'><img src={images[8].img} /></NavLink>
                </li>
            </ul>
        </section>
    </>
  )
}

export default Footer