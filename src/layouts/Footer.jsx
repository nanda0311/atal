import React from 'react';
import styled from 'styled-components';
import nicImage from '../assets/logos/Aic.png';
import { FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter, FaRegUserCircle, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Column>
          <h2>AIC-PECF</h2>
          <img src={nicImage} alt="NIC" style={{ width: '100px', height: 'auto' }} />
        </Column>
        <Column>
          <h3>About Us</h3>
          <ul>
            <li>Vision</li>
            <li>Mission</li>
            <li>Who We Are</li>
          </ul>
        </Column>
        <Column>
          <h3>Quick Links</h3>
          <ul>
            <li>Careers</li>
            <li>Apply</li>
            <li>Events</li>
            <li>Join as a Partner</li>
            <li>Become an Investor</li>
          </ul>
        </Column>
        <Column>
          <h3>News</h3>
          <ul>
            <li>Daily News</li>
            <li>Press Release</li>
            <li>Event News</li>
          </ul>
        </Column>
        <Column>
          <h3>Contact Us</h3>
          <p><FaRegUserCircle /> Name</p>
          <p><FaEnvelope /> ceo@aicpecf.org</p>
          <p><FaPhoneAlt /> +91 123456789</p>
          <SocialIcons>
            <a className='instagram' href="https://www.instagram.com/aic_pecf" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a className='x'href="https://twitter.com/aicpecftweet" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            <a className='link'href="https://www.linkedin.com/company/aicpecf/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a className='youtube'href="https://youtube.com/@atalincubationcentre-pecfo946" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </SocialIcons>
        </Column>
      </Container>
      <Copyright>&copy; 2024 AIC-PECF. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #12283c;
  color: #fff;
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const Column = styled.div`
  flex: 1 1 200px;
  margin: 10px;
  min-width: 200px;

  h2, h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 5px;
    cursor: pointer;
    &:hover {
      color: orange;
    }
  }

  p {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 5px 0;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  
  a {
    color: #fff;
    font-size: 24px;
    &.instagram:hover {
      color: #d62976;
    }&.youtube:hover {
      color: #FF0000;
    }&.link:hover {
      color:#0077B5;
    }&.x:hover {
      color: black;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding: 15px 0;
  background-color: #0f1e34;
  width: 100%;
  font-size: 0.9em;
`;

export default Footer;
