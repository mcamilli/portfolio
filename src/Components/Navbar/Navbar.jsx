import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} className='logo' alt=''/>
        <ul className='nav-menu'>
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu ("home")}>Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu ("about")}>About me</p></AnchorLink> </li>
            <li><AnchorLink className='anchor-link' offset={50} href='#publications'><p onClick={()=>setMenu ("publications")}>Publications</p></AnchorLink> </li>
        </ul>
        <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu ("contact")}>Connect with me</p></AnchorLink></div>
      
    </div>
  )
}

export default Navbar
