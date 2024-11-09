import React from 'react';
import Carousel from '../components/Homepage/CarouselSection';
import { Player } from '@lottiefiles/react-lottie-player'; // Import the correct package
import iot from '../assets/Homepage/iot.json';
import uav from '../assets/Homepage/uav.json';
import edm from '../assets/Homepage/edm.json';
import styled from 'styled-components'; // Import styled-components

const Home = () => {
  return (
    <Container>
      <Carousel />
      <h1>Focus Area</h1>
      <AnimationsContainer>
        <Box>
          <h1>EDM</h1>
          <Player
            autoplay
            loop
            src={edm}
            style={{ height: '300px', width: '300px' }}
          />
        </Box>
        <Box>
          <h1>UAV</h1>
          <Player
            autoplay
            loop
            src={uav}
            style={{ height: '300px', width: '300px' }}
          />
        </Box>
        <Box>
          <h1>IOT</h1>
          <Player
            autoplay
            loop
            src={iot}
            style={{ height: '300px', width: '300px' }}
          />
        </Box>
      </AnimationsContainer>
    </Container>
  );
};

export default Home;

// Styled Components

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const AnimationsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 20px;
  background: #fff; /* White background */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
`;

const Box = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f8f8f8; /* Light background for each box */
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Box shadow for each item */
  width: 300px;
  
  h1 {
    margin-bottom: 10px;
    font-size: 24px;
    color: #333;
  }
`;
