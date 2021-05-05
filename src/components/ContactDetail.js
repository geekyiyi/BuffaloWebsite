import React from 'react'
import './ContactDetail.css'
import backgroundImg from '../images/contact.jpg'

function ContactDetail() {
    return (
        <div className ='contact-detail-container'>
            <img src={backgroundImg} alt ='background image'></img>

            {/* <h3>We’d love to hear from you</h3> */}
            <div className = 'contact-detial-block-container'>
                <div className ='contact-detial-block'>
                    <p><i class="fas fa-phone-square-alt"/>Contact Number</p>

                    <div className ='contact-detail-item-container'>
                        <div className ='contact-detail-item'>
                            <p>+61 2 8068 0169</p>
                            <p>9 AM to 5 PM  Monday to Friday (public hoilday exclusive）</p>
                        </div>      
                    </div>
                </div>

                <div className ='contact-detial-block'>
                    <p><i class="far fa-envelope"/>E-mail</p>

                    <div className ='contact-detail-item-container'>
                        <div className ='contact-detail-item'>
                            <p>info@brightentechs.com.au</p>
                        </div>      
                    </div>
                </div>

                <div className ='contact-detial-block'>
                    <p><i class="fas fa-home"/>Office Address</p>

                    <div className ='contact-detail-item-container'>
                        <div className ='contact-detail-item'>
                            <p>Unit 2, 111 Wicks Rd Macquarie Park, NSW, 2113</p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.821907589313!2d151.13076311608756!3d-33.791096880677884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a5fc481341bd%3A0xed05be904094f316!2sSuite%202%2F111%20Wicks%20Rd%2C%20Macquarie%20Park%20NSW%202113!5e0!3m2!1sen!2sau!4v1620190593459!5m2!1sen!2sau" width="800" height="800" frameBorder="0" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                        </div>      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetail
