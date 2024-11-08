import React from 'react';
import './Footer.css';
import nicImage from '../assets/logos/AIC.png';
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaRegUserCircle, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="column">
          <h2> AIC-PECF<br />
            <span className="footer-heading-span"></span>
          </h2>
          <img src={nicImage} alt="NIC" className="image" /><br />

        </div>
        <div className="column">
          <h3> About us</h3>
          <ul>
            <li>vission</li>
            <li>Mission</li>
            <li>who we are</li>

          </ul>
        </div>
        <div className="column">
          <h3>Quik Link</h3>
          <ul>
            <li>Careers</li>
            <li>Apply</li>
            <li>Events</li>
            <li>join us as apartner</li>
            <li>Became an investor</li>
          </ul>
        </div>
        <div className="column">
          <h3>News</h3>
          <ul>
            <li>Daily News</li>
            <li>Press release</li>
            <li>Event News</li>
          </ul>
        </div>
        <div className="column">
          <h3>Contact Us</h3>
          <p><FaRegUserCircle /> name</p>
          <p><FaEnvelope /> ceo@aicpecf.org</p>
          <p>< FaPhoneAlt />+91 123456789</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/aic_pecf?igsh=MW5iam5nYnYyY2hxbg==" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://x.com/aicpecftweet?t=WpgCBp7UIGqgBPhGT5wrfA&s=09" target="_blank" rel="noopener noreferrer" >
              <FaXTwitter />
            </a>
            <a href="https://www.linkedin.com/company/aicpecf/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://youtube.com/@atalincubationcentre-pecfo946?si=S2Ic-rMLwHU49irU" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; 2024 Your Company. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
