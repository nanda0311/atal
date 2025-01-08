import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Allows multiple cards to wrap */
  gap: 1.5rem; /* Adjusts the space between cards */
  margin: 2rem 0; /* Adds some space around the container */
`;

const Card = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  height: 100%;
  width: 300px; /* Fixed width for consistent card sizes */
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 12rem;
  width: 12rem; /* Ensure the container is square */
  overflow: hidden;
  border-radius: 50%; /* Makes the container circular */
  margin: 1rem auto; /* Centers the circle within the card */
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image fills the circular frame */
`;

const CategoryBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 1rem;
  background-color: #2563eb;
  color: white;
  font-size: 0.875rem;
  border-radius: 9999px;
`;

const Content = styled.div`
  padding: 1.5rem;
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
      <ImageContainer>
        <Image src={image} alt={title} />
        <CategoryBadge>{category}</CategoryBadge>
      </ImageContainer>
      <Content>
        <Title>{title}</Title>
      </Content>
    </Card>
  );
};

export const PortfolioGrid = ({ cards }) => (
  <CardContainer>
    {cards.map((card, index) => (
      <PortfolioCard
        key={index}
        title={card.title}
        image={card.image}
        category={card.category}
        onClick={card.onClick}
      />
    ))}
  </CardContainer>
);

export default PortfolioCard;
