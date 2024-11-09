import React from 'react';
import { ptuLogo, Aim, Aic } from '../assets/logos/logs';
import Navbar from './Nav';

const Header = () => {
  return (
    <div style={styles.headerContainer}>
      <div style={styles.logoContainer}>
        <img src={Aic} alt="AIC Logo" style={styles.logo} />
        <img src={Aim} alt="AIM Logo" style={styles.logo} />
        <img src={ptuLogo} alt="PTU Logo" style={styles.logo} />
      </div>
      <h1 style={styles.mainText}>ATAL INCUBATION CENTER - PEC FOUNDATION</h1>
      <h2 style={styles.subText}>PUDUCHERRY TECHNOLOGY UNIVERSITY</h2>
      <Navbar/>
    </div>
  );
};

const styles = {
  headerContainer: {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '10px',
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '5px',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 10,
    paddingTop: '15px',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '10px',
    padding: '0 10px',
    flexWrap: 'wrap',
  },
  logo: {
    height: '80px',
    margin: '5px',
    maxWidth: '100%',
  },
  mainText: {
    fontSize: '1.5rem',
    color: '#12283c',
    fontWeight: 'bold',
    marginTop: '10px',
  },
  subText: {
    fontSize: '1.2rem',
    color: '#1a1a1a',
    fontWeight: 'normal',
    marginBottom: '10px',
  },
  // Media queries for responsiveness
  '@media (max-width: 1024px)': {
    mainText: {
      fontSize: '1.3rem', // Slightly smaller text on tablets
    },
    subText: {
      fontSize: '1rem', // Smaller subtitle text on tablets
    },
    logoContainer: {
      justifyContent: 'center', // Center logos on tablets and smaller screens
    },
    logo: {
      height: '70px', // Reduce logo size on tablets
    },
  },
  '@media (max-width: 768px)': {
    headerContainer: {
      padding: '8px', // Adjust padding for smaller screens
    },
    mainText: {
      fontSize: '1.2rem', // Smaller text on mobile devices
    },
    subText: {
      fontSize: '0.9rem', // Smaller subtitle text on mobile
    },
    logo: {
      height: '60px', // Smaller logo size for mobile
    },
  },
  '@media (max-width: 480px)': {
    logo: {
      height: '50px', // Even smaller logo on very small screens
    },
    mainText: {
      fontSize: '1rem', // Adjust text size further on small devices
    },
    subText: {
      fontSize: '0.8rem', // Smaller subtitle text for very small screens
    },
  },
};

export default Header;
