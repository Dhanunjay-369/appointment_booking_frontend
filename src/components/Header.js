import {useState} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import Logo from './images/Logo.png';
import axios from 'axios';
function Header()
{
    return(
        <div className="header-wrapper">
            <div className="header-navigation">
                <div className="header-logo">
                    <img src={Logo} alt="Ethnus Hospitals" height="64" width="64"/>
                </div>
                <div className="header-title">
                    <span className="title">Health Care Appointment Booking</span>
                </div>
                <div className="navigation-bar">
                    <nav>
                        <Link to='/' style={{color:'#fff'}}>Home</Link>
                        <Link to='/guide' style={{color:'#fff'}}>Guide</Link>
                        <Link to='/bookings' style={{color:'#fff'}}>Bookings</Link>
                        <Link to='/booknow' style={{color:'#fff'}}>Book Now</Link>
                        <Link to='/contact' style={{color:'#fff'}}>Contact Us</Link>
                    </nav>
                </div>
                {/* <div className="header-register">
                    <button type="submit" className="header-btn"><Link to="/login">Login/Register</Link></button>
                </div> */}
            </div>
        </div>
    );
}
export default Header;
        