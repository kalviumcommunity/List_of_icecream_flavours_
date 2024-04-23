import React from 'react'
import { Link } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
  

  return (
    <>
    <h1 className='welcome'> WELCOME TO ICE-CREAM WORLD 😋</h1>
      <img className='logo' src="https://logodix.com/logo/629346.jpg" alt="LOGO" />

      <p className='title'><b>You can't buy happiness, but you can buy ice cream. And that's kind of the same thing.</b></p>
      
      <Link to='/Mainpage'><button className="glow-on-hover" type="button">TASTE ME!</button></Link>
    </>
  )
}

export default Homepage
