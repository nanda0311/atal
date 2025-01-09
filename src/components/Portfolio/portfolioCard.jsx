import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  border-radius: 12px;
  height: 100%;
  width: 320px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin: 1rem auto;
  padding: 1rem; /* Add padding for spacing around the image */
  border-radius: 50%; /* Keeps the logo circular, if needed */
  width: auto;
  height: auto;
  max-width: 240px; /* Increase the max width */
  max-height: 240px; /* Increase the max height */
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Maintains aspect ratio without cutting off the logo */
`;


const CategoryBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.4rem 1rem;
  background-color: #2563eb;
  color: white;
  font-size: 0.875rem;
  border-radius: 9999px;
  z-index: 2;
`;

const Content = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const PortfolioCard = ({ title, image, category, onClick }) => {
  return (
    <Card onClick={onClick}>
      <CategoryBadge>{category}</CategoryBadge>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <Content>
        <Title>{title}</Title>
      </Content>
    </Card>
  );
};

export default PortfolioCard;
