import React from 'react'
import './About.css'
import profilepic from '../../assets/profile-about.jpeg'
import logo2 from '../../assets/logo2.png'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About me</h1>
            <img src={logo2} alt=''/>
        </div>  
        <div className='about-sections'>
            <div className='about-left'>
            <img src={profilepic} alt=''/>
        </div>  
            <div className='about-right'>
                <div className='about-para'>
                    <p>Driven by curiosity and a passion for sharing knowledge, my journey with honey bees started when I began beekeeping with my grandfather. 
                        This early exposure inspired me to pursue biology and led me to realize that researching honey bees was a natural extension of my interests. 
                        Consequently, I completed my Masters and PhD, both focused on honey bees. 
                        Alongside my academic research, I have also been teaching, and I have learned as much as I have taught. 
                    </p>
                    <p>As an IT enthusiast, I also have experience using GIS, Linux, R, Javascript, CSS, ReactJs, NextJs, REST APIs, GIT, and Clojure.
                    </p>
                <div className='about-achievements'>
                <div className="about-achievement">
                    <h1>10 + </h1>                
                    <p>Years of beekeeping experience</p>
                </div>     
                <hr/>        
                <div className="about-achievement">
                    <h1> 10 </h1>                
                    <p> Years on honey bee research experience </p>
                </div>     
                <hr/>       
                <div className="about-achievement">
                    <h1> 3 </h1>                
                    <p>Years of teaching experience </p>
                </div>
            </div>
            </div>
            </div>  
        </div>  


    </div>
  )
}

export default About
