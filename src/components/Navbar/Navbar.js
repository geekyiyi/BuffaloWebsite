import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './Navbar2.css';
import logo from '../../images/logo.png';
//import { Dropdown } from 'rsuite';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar,setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);//让button在refresh的时候不再出现

  window.addEventListener('resize', showButton);

  const changeBackground = () =>{
    if(window.scrollY >= 80 || window.innerWidth <= 960){
      setNavbar(true);
    }else{
      setNavbar(false);
    }

  }

  window.addEventListener('scroll',changeBackground)
    
  return (
    
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className='navbar-container'>
         
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>           
              <img className = 'logo-picture' src={logo} alt="Logo"/> 
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
               Home
              </Link>
            </li>

            <li className='nav-item'>
              {/* <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}> */}
               <a href="/#about-us" className='nav-links'>About Us</a> 
              {/* </Link> */}
            </li>

            <li className='nav-item'>
            
              {/* <Link to='/safetytools' className='nav-links' onClick={closeMobileMenu}>
              <button className='dropbtn'>Services <i class="fa fa-caret-down"></i></button>
              <div className="dropdown-content">
                <Link className="link" to='/safetytools'>Safe&Tools</Link>
              </div>
              </Link> */}

              <div className='dropdown' onClick={closeMobileMenu}>
                <button className='dropbtn'>Services <i class="fa fa-caret-down"></i></button>

                <div className="dropdown-content">               

                    <Link className="link" to='/projectManagement' style={{fontSize: "18px"}} >
                    Project Management
                    </Link>
                    <Link className="link" to='/design' style={{fontSize: "18px"}} >
                    Design
                    </Link>

                    <Link className="link" to='/radioCompliance' style={{fontSize: "18px"}} >
                    Radio Compliance
                    </Link>
 
                </div>
              </div>
            </li>

            <li className='nav-item'>
              <Link to='/career' className='nav-links' onClick={closeMobileMenu}>
                Career
              </Link>
            </li>


            <li>
              <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
          </ul>

          {/* {button && <Button buttonStyle='btn--outline'>CONTACT US</Button>} */}

        </div>
      </nav>
    
  );
}

export default Navbar;