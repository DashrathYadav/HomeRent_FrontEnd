import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
  return (

    <div className='LandingPage--span'>
      <Link to={'login'} ><span  style={{backgroundColor:"green"}} className='LandigPageOptions--span' >Login </span></Link>
      {/* <a href='/login' ><span  style={{backgroundColor:"green"}} className='LandigPageOptions--span' >Login </span></a> */}
    </div>
  )
}

export default LandingPage