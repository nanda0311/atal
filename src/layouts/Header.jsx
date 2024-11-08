import React from 'react';
import Aiclogo from '../assets/logos/AIC.png';
import Aim from '../assets/logos/AIM.png';
import Ptu from '../assets/logos/ptu-logo.png';
import Menu from './Menu';

const Header = () => {
  return (
    <div style={styles.headerContainer}>
      <div style={styles.logoContainer}>
        <img src={Aiclogo} alt="AIC Logo" style={styles.logo} />
        <img src={Aim} alt="AIM Logo" style={styles.logo} />
        <img src={Ptu} alt="PTU Logo" style={styles.logo} />
      </div>
      <h1 style={styles.mainText}>ATAL INCUBATION CENTER - PEC FOUNDATION</h1>
      <h2 style={styles.subText}>PUDUCHERRY TECHNOLOGY UNIVERSITY</h2>
      <Menu/>
    </div>
  );
};

const styles = {
  headerContainer: {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '5px',
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '5px',
    width: '100%', // Full width
    position: 'fixed', // Fix it at the top
    top: 0, // Align it to the top of the viewport
    left: 0,
    zIndex: 10, // Ensures it stays above other content
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '10px',
    padding: '0 10px',
  },
  logo: {
    height: '100px', // Adjust logo size as necessary
  },
  mainText: {
    fontSize: '1.5rem',
    color: '#12283c',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: '1.2rem',
    color: '#1a1a1a',
    fontWeight: 'normal',
  },
};



export default Header;
