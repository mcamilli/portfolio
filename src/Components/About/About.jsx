import React from 'react'
import './About.css'
import profilepic from '../../assets/profile-about.jpeg'


const About = () => {
  return (
    <div className='about'>
        <div className='about-title'>
            <h1>About me</h1>
        </div>  
        <div className='about-sections'>
            <div className='about-left'>
            <img src={profilepic} alt=''/>
            </div>  
            <div className='about-right'>
                <div className='about-para'>
                    <p>Detail ahsiuah iuahi hsaiu hsiahs iahso ajlskja lkj sajsoiahjiou jo jaoij saoi jao joaj wa jw as</p>
                    <p>Details</p>
                </div>
            </div>  
        </div>  
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
  )
}

export default About
