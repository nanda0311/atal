import React from 'react';
import styled from 'styled-components';
import { Calendar, Users, Target, Award } from 'lucide-react';

const Container = styled.div`
  padding: 1.5rem;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 16rem;
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4b5563;

  svg {
    color: #2563eb;
  }
`;

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  color: #4b5563;
`;

const List = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
  color: #4b5563;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  background-color: #2563eb;
  color: white;
  border-radius: 9999px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const StartupDetails = ({ startup }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={startup.image} alt={startup.title} />
        <CategoryBadge>{startup.category}</CategoryBadge>
      </ImageContainer>

      <Title>{startup.title}</Title>
      
      <InfoGrid>
        <InfoItem>
          <Calendar size={20} />
          <span>Founded: 2023</span>
        </InfoItem>
        <InfoItem>
          <Users size={20} />
          <span>Team Size: 15+</span>
        </InfoItem>
        <InfoItem>
          <Target size={20} />
          <span>Stage: {startup.category}</span>
        </InfoItem>
        <InfoItem>
          <Award size={20} />
          <span>DPIIT Recognized</span>
        </InfoItem>
      </InfoGrid>

      <Section>
        <SectionTitle>About</SectionTitle>
        <Text>{startup.description}</Text>
      </Section>

      <Section>
        <SectionTitle>Key Achievements</SectionTitle>
        <List>
          <li>Successfully completed pilot with major industry partners</li>
          <li>Secured seed funding of ₹50 lakhs</li>
          <li>Achieved 100% YoY growth</li>
        </List>
      </Section>

      <Section>
        <SectionTitle>Contact</SectionTitle>
        <Text>
          For more information or collaboration opportunities, please reach out to us.
        </Text>
        <Button>Get in Touch</Button>
      </Section>
    </Container>
  );
};

export default StartupDetails;
