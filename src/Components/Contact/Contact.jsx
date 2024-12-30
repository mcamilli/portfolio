import React from 'react'
import './contact.css'
import logo2 from '../../assets/logo2.png'
import email from '../../assets/email_icon.png'
import insta from '../../assets/insta_icon.png'
import phone from '../../assets/phone_icon.png'


const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c711a647-3f29-4fd7-bbb4-5232895e061d");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    
  return (    
    <div id='contact' className='contact'>
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
            <form onSubmit={onSubmit} className="contact-right">
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
