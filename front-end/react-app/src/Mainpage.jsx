import React from 'react'
import { Link } from 'react-router-dom';
import './Mainpage.css';

function Mainpage() {
  

  return (
    <>
    
   <Link to='/Explore' ><button className="explore-on-hover" type="button">Explore😋</button></Link> 

   {/* Back */}
   <Link to='/Homepage'><button className="back-on-hover" type="button">Back</button></Link>
    </>
  )
}

export default  Mainpage
