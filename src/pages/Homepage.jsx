// src/pages/Homepage.jsx
import React from 'react';
import Carousel from '../components/Homepage/CarouselSection';
import iot from '../assets/Homepage/iot.svg'

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Carousel />
      <img src  ={iot} alt='iot'></img>
    </div>
  );
};

export default Home; 