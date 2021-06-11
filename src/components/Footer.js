import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import {Icon} from "semantic-ui-react";

function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-link-container">
                <div className='footer-link-items'>

                            <header className="footer-link-title"><h3>Menu</h3></header>

                            <ul className='footer-menu'>
                                <li className = 'footer-item'><Link to='/' className = 'footer-links'>Home</Link></li>                          
                                <li className = 'footer-item'><Link to='/about-us' className = 'footer-links'>About Us</Link></li>
                                <li className = 'footer-item'><Link to='/'className = 'footer-links'>Service</Link></li>
                                <li className = 'footer-item'><Link to='/'className = 'footer-links'>People and Career</Link></li>                         
                                <li className = 'footer-item'><Link to='/'className = 'footer-links'>Contact Us</Link></li>
                            </ul>       
                </div>

                <div className='footer-link-items'>

                            <header className="footer-link-title"><h3>Quick Link</h3></header>

                            <ul className='footer-menu'>
                                <li className = 'footer-item'><Link to='/' className = 'footer-links'>Home</Link></li>                          
                                <li className = 'footer-item'><Link to='/about-us' className = 'footer-links'>About Us</Link></li>
                                <li className = 'footer-item'><Link to='/'className = 'footer-links'>Service</Link></li>
                            </ul>       
                </div>

                <div className='footer-link-items'>

                            <header className="footer-link-title"><h3>Contact</h3></header>

                            <div class="textwidget">
                                <p>
                                    Brighten Technologies
                                    <br/>
                                    Unit 2, 111 Wicks Road
                                    <br/>
                                    Macquarie Park, NSW 2113
                                </p>
                                <p>tel: 02 8068 0169</p>
                                <p>info@brightentechs.com.au</p>
                            </div>   
                </div>
            </div>

            <section className='social-media'>
                <div className='social-media-wrap'>

                    <div className ='social-icons'>
                        <Link
                        className ='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                        icon="facebook"
                        >
                        
                        <i className='fab fa-facebook-f' />
                        </Link>

                        <Link
                        className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </Link>

                        <Link
                        className='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'
                        >
                            <i className='fab fa-youtube' />
                        </Link>

                        <Link
                        className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                        <i className='fab fa-twitter' />
                        </Link>
                        
                        <Link
                        className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>  
        </div>
    )
}



export default Footer
