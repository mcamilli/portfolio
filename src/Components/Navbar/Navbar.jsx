import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} className='logo' alt=''/>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About me</li>
            <li>Services</li>
            <li>Curriculum Vitae</li>
        </ul>
        <div className='nav-connect'>Connect with me</div>
      
    </div>
  )
}

export default Navbar
