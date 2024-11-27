import React from 'react';
import styled from 'styled-components';

const portfolioData = [
  {
    id: 1,
    title: 'AMIZHTH TECHNO SOLUTIONS PRIVATE LIMITED',
    description: 'DPIIT Startup',
    image:
      'https://storage.googleapis.com/a1aa/image/VZesSmSI323QOCmnPl7KKfeCd2471ZtLzjWCgRfzKVjo5CVPB.jpg',
  },
  {
    id: 2,
    title: 'Dharshan Brothers Technologies Private Limited',
    description: 'DPIIT Startup',
    image:
      'https://storage.googleapis.com/a1aa/image/ONsQe3xZ6lTZAKOYr3uYxdAbfl7dmQl91r9vYAtdmiepchqnA.jpg',
  },
  {
    id: 3,
    title: 'ACTINGSPOT DIGITAL SERVICES PRIVATE LIMITED',
    description: 'DPIIT Startup',
    image:
      'https://storage.googleapis.com/a1aa/image/zMaUf80Hzo34PKzfDgqfeJe7S051rf4vxo87RsbUeZPBMXo6JA.jpg',
  },
  {
    id: 4,
    title: 'Saem Mosae Edtech Private Limited',
    description: 'DPIIT Startup',
    image:
      'https://storage.googleapis.com/a1aa/image/eLeaHu54kljRLEhQuCbMLXb95C2OtzGaFumELh1ZP62XuQ1TA.jpg',
  },
  {
    id: 5,
    title: 'WARPE',
    description: 'DPIIT Startup',
    image:
      'https://storage.googleapis.com/a1aa/image/VN5LvI5JjiZsNdG459CHjEMLWkWlecLxxoajTtfCZgvSuQ1TA.jpg',
  },
  {
    id: 6,
    title: 'Company with Rocket Icon',
    description: 'DPIIT Startup',
    image:
      'https://storage.googleapis.com/a1aa/image/JDlR6zn9d7bYLh20KH1ESLuNLXhXtHl2UUF10e2Wc3bLXo6JA.jpg',
  },
  {
    id: 7,
    title: 'Aeroin',
    description: 'DPIIT Startup',
    image:
      'https://storage.googleapis.com/a1aa/image/GV9BtXyLyE5wPxrxN5CzT3Bufaq78vfXa8WxOCvpAfomchqnA.jpg',
  },
  {
    id: 8,
    title: 'Start Insights',
    description: 'DPIIT Startup',
    image:
      'https://storage.googleapis.com/a1aa/image/TmibfNneDfem2QbGVEgjBFlshnwf09eEc61FW5DXVDrQmLU9E.jpg',
  },
];

// Styled Components
const Container = styled.div`
  background-color: #f0f9ff;
  padding: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #6b7280;
`;

const Portfolio = () => {
  return (
    <Container>
      <Grid>
        {portfolioData.map(({ id, title, description, image }) => (
          <Card key={id}>
            <Image src={image} alt={`Logo of ${title}`} />
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;
