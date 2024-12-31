import React from 'react'
import './Header.css'
import profile_img from '../../assets/profile2.jpg'

const Header = () => {
  return (
    <div id = 'home' className='header'>
      <img src={profile_img} alt=''/>
      <h1> <span>I`m Marcelo Camilli,</span> PhD</h1>
      <p> Honey Bee Researcher Exploring into the World of Development </p>
      <div className='header-action'>
        <div className="header-contact">Contact </div>
        <div className="header-resume">My resume</div>        
      </div>
    </div>
  )
}

export default Header
