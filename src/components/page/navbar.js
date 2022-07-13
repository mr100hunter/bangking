import React from 'react'
// style 
import './style/navbar.css'

const Navbar = () => {
    const images = [
        {"img" : require("./img/flag.jpg")}
    ]
  return (
    <>
        <section class='navBar'>
            <span></span>
            <h2>A1</h2>
            <img  src={images[0].img} />
        </section>
    </>
  )
}

export default Navbar