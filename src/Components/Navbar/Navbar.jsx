import React, { useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import openImg from '../../assets/menu_open.svg'
import closeImg from '../../assets/menu_close.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    
  }

  return (
    <div className='navbar'>
        <img src={logo} className='logo' alt=''/>
        <img src={openImg} onClick={openMenu} alt='' className='nav-mob-open'/>
        <ul ref={menuRef} className='nav-menu'>
            <img src={closeImg} onClick={closeMenu} alt='' className='nav-mob-close'/>
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=> ("home")}>Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=> ("about")}>About me</p></AnchorLink> </li>
            <li><AnchorLink className='anchor-link' offset={50} href='#publications'><p onClick={()=> ("publications")}>Publications</p></AnchorLink> </li>
        </ul>
        <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=> ("contact")}>Connect with me</p></AnchorLink></div>
      
    </div>
  )
}

export default Navbar
