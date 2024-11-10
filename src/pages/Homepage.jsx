import React from 'react';
import Carousel from '../components/Homepage/CarouselSection';
import Stats from '../components/Homepage/Stat';
import { Player } from '@lottiefiles/react-lottie-player';
import iot from '../assets/Homepage/iot.json';
import uav from '../assets/Homepage/uav.json';
import edm from '../assets/Homepage/edm.json';
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <Carousel />
      {/* foucs Area */}
      <AnimationsContainer>
        <Heading>Focus Area</Heading>
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

      {/* stats */}
      <Stats/>

    </Container>
  );
};

export default Home;

// Styled Components

const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

const AnimationsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  background: #fff; /* White background */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
  flex-wrap: wrap; /* Allow wrapping on smaller screens */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack vertically on small screens */
    align-items: center;
  }
`;

const Heading = styled.h1`
  width: 100%;
  margin-bottom: 20px;
  font-size: 32px;
  color: #333;
  text-align: center;
  font-weight: bold;
`;

const Box = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f8f8f8; /* Light background for each box */
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Box shadow for each item */
  width: 100%;
  max-width: 300px; /* Ensure box doesn’t stretch too wide */

  h1 {
    margin-bottom: 10px;
    font-size: 24px;
    color: #333;
  }

  /* Lottie Animation Responsive */
  .lottie-player {
    width: 100%;
    max-width: 300px;
    height: auto;
  }
  
  /* For smaller screens */
  @media (max-width: 480px) {
    padding: 15px;
    h1 {
      font-size: 20px;
    }
  }
`;
