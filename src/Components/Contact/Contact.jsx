import React from 'react'
import './contact.css'
import logo2 from '../../assets/logo2.png'
import email from '../../assets/email_icon.png'
import insta from '../../assets/insta_icon.png'
import phone from '../../assets/phone_icon.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={logo2} alt=''/>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let`s talk</h1>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={email} alt=''/> <p>marcelo.camilli91@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={phone} alt=''/> <p>999 999 999</p>
                    </div>                     
                    <div className="contact-detail">
                        <img src={insta} alt=''/> <p>@camillimarcelo</p>                        
                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor=''>Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor=''>Your E-mail</label>
                <input type='text' placeholder='Enter your r-mail' name='e-mail'/>
                <label htmlFor=''> Write your message here</label>
                <textarea name='message' rows ='8' placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
