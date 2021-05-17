import React from 'react'
import './ContactDetail.css'
import backgroundImg from '../images/contact.jpg'
import home from '../images/home.PNG'
import mail from '../images/mail.PNG'
import phone from '../images/phone.PNG'

function ContactDetail() {
    return (
        <div className ='contact-detail-container'>
            {/* hero section */}
            <div className='contact-detail-title-container'>
                    <h1 id='contact-title'>Contact Us</h1>
                
                {/* <img className ="bgi" src='https://storage-asset.msi.com/template/images/contact_us/kv-contact-us.jpg' alt ='background image'></img> */}
            </div>
            
            
            <div className ="contact-detial-wrapper">
                <div className = 'contact-detial-block-container'>        
                    {/* email section */}
                    <div className ='contact-detial-block email'>                
                        <img className="spot" src={mail}></img>
                        <p className ="contact-label">Contact Customer Support</p>

                        <div className="contact-detail-item">
                            <p>E-mail :</p>
                            <p className='contact-info'>info@buffalo-innovation.com.au</p>
                        </div>
                    </div>
                    {/* phone section */}
                    <div className ='contact-detial-block contact-number'>               
                        <img className="spot" src={phone}></img>   
                        <p className ="contact-label">want to talk to our team member?</p>

                        <div className ='contact-detail-item-container'>
                            <div className ='contact-detail-item'>
                                <p>9 AM to 5 PM  Monday to Friday (public hoilday exclusive）</p>
                                <p className ='contact-info'>+61 2 8068 0169</p>
                                
                            </div>      
                        </div>
                    </div>
                </div>
            </div>

            <h1>We’d love to hear from you</h1>

            <div className ='contact-detial-address'>
                <div className = 'contact-detail-map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.821907589313!2d151.13076311608756!3d-33.791096880677884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a5fc481341bd%3A0xed05be904094f316!2sSuite%202%2F111%20Wicks%20Rd%2C%20Macquarie%20Park%20NSW%202113!5e0!3m2!1sen!2sau!4v1620190593459!5m2!1sen!2sau"  width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>    
                </div>

                <div className ='contact-detail-address-info'>
                    <img  className="home-spot" src={home}></img>
                    <div className='contact-detail-item'>
                        <p className ="contact-label">Connect with our offices</p>
                        <p>Address:</p>
                        <p className ='contact-info'>Unit 2, 111 Wicks Rd <br/>Macquarie Park, NSW, 2113</p>
                    </div>
                </div>  

                
            </div>
            
        </div>
    )
}

export default ContactDetail
