import React from 'react'
import { Link } from 'react-router-dom';
import './Explore.css'


function Explore() {
  

    return (
      <>
      
       <img className='fake' src="https://i.pinimg.com/originals/e9/77/05/e977050e7fabfe4674d0949d76e5c76b.jpg" alt="Acai-Berry" />

       <p className='flavour'>Flavour of Ice-Cream: ACAI-BERRY</p>
       <p className='combination'>Combination: Acai and Coconut</p>
       <p className='origin'>Origin: South-America,Brazil.</p>
       
        
        <Link to='/Mainpage'><button className="back-on-hover" type="button">Back</button></Link>
      </>
    )
  }
  
  export default Explore