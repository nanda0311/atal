import React from 'react';
import styled from 'styled-components';

const Cooperative = () => {
  const cooperativePartners = [
    { name: 'Facebook Research', logo: 'https://via.placeholder.com/150?text=FB' },
    { name: 'Google AI', logo: 'https://via.placeholder.com/150?text=Google' },
    { name: 'Microsoft Labs', logo: 'https://via.placeholder.com/150?text=MS' },
    { name: 'OpenAI', logo: 'https://via.placeholder.com/150?text=OpenAI' },
  ];

  return (
    <CooperativeContainer>
      <h2>Our Co-Operative Partners</h2>
      <PartnersContainer>
        {cooperativePartners.map((partner, index) => (
          <PartnerCard key={index}>
            <PartnerLogo src={partner.logo} alt={`${partner.name} logo`} />
            <PartnerName>{partner.name}</PartnerName>
          </PartnerCard>
        ))}
      </PartnersContainer>
    </CooperativeContainer>
  );
};

export default Cooperative

const CooperativeContainer = styled.div`
  text-align: center;
  padding: 20px;

  h2 {
    font-size: 1.8rem;
    color: #1d4ed8; /* Blue color */
  }

  @media (max-width: 768px) {
    padding: 10px;

    h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;

const PartnersContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const PartnerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.5s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 12px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

const PartnerLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PartnerName = styled.h3`
  margin-top: 10px;
  font-size: 1rem;
  color: #1d4ed8;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
