import { useState } from 'react';
import  styles from './Navbar.module.css';
import './App.css';
import picklulogo from './images/logo.webp';
import { Link } from "react-router-dom";

function Navbar() {
    // adding the states 
    const [isActive, setIsActive] = useState(false);
    //add the active class
    const toggleActiveClass = () => {
      setIsActive(!isActive);
    };
    //clean up function to remove the active class
    const removeActive = () => {
      setIsActive(false)
    }
    return (
      <div className="App">
          <nav className={`${styles.navbar}`}>
            {/* logo */}
            <div className="container">
  <div className="row">
            <div className="logo col-md-3 col-lg-2 col-sm-12 "> <img src={picklulogo} alt="" /> </div>
            <div className="col-md-1 col-lg-8 d-lg-block col-sm-1 header-styles">
            <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
              <li onClick={removeActive}>
                <Link to='/' className={`${styles.navLink}`}>HOME</Link>
              </li>
              <li onClick={removeActive}>
                <Link to='/rooms' className={`${styles.navLink}`}>ROOMS</Link>
              </li>
              <li onClick={removeActive}>
                <Link to='/teams' className={`${styles.navLink}`}>TEAM</Link>
              </li>
              <li onClick={removeActive}>
                <Link to='/contact' className={`${styles.navLink}`} style={{marginRight:"10px"}}>CONTACT</Link>
              </li>
            </ul>
            </div>
            
            <div className="col-lg-2 col-md-5 col-sm-3 booking-section ml-5"><Link to='/booking'>
            <div className='booknow-div'>
              <p className='booknow'>BOOK NOW</p>
            </div></Link>
            </div>
            
            <div className="col-lg-2 col-md-3 col-sm-3 booking-section"><Link to='/booking'> 
            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
            </div></Link>
            </div>
            </div>
  </div>
          </nav>
      </div>
    );
  }
  export default Navbar;
  ;