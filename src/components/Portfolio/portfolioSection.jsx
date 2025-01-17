import React, { useState, Suspense } from 'react';
import styled from 'styled-components';
import { portfolioData } from './data/portfolioData';
import PortfolioCard from './PortfolioCards';
import Modal from './UI/Modal';
import StartupDetails from './StartupDetail';
import AdvancedFilterForm from './AdvancedFilterForm';

// Lazy loading PortfolioFilters
const PortfolioFilters = React.lazy(() => import('./PortfolioFilters'));

const Section = styled.section`
  padding: 4rem 1rem;
  background: linear-gradient(180deg, #eef2f7 0%, #ffffff 100%);
`;

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #1e3a8a;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 0.5rem;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const ITEMS_PER_PAGE = 15;

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedStartup, setSelectedStartup] = useState(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [isAdvancedFilterOpen, setIsAdvancedFilterOpen] = useState(false);

  const filteredData =
    activeCategory === 'All'
      ? portfolioData
      : portfolioData.filter(item => item.category === activeCategory);

  const visibleData = filteredData.slice(0, visibleCount);

  const handleKnowMore = () => setVisibleCount(prev => prev + ITEMS_PER_PAGE);

  return (
    <Section>
      <Container>
        <Header>
          <Title>Our Portfolio</Title>
        </Header>

        <Suspense fallback={<div>Loading filters...</div>}>
          <PortfolioFilters
            categories={['All', 'Ongoing', 'Graduated']}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </Suspense>

        <Grid>
          {visibleData.map(item => (
            <PortfolioCard
              key={item.id}
              {...item}
              onClick={() => setSelectedStartup(item)}
            />
          ))}
        </Grid>

        {visibleCount < filteredData.length && (
          <ButtonWrapper>
            <Button onClick={handleKnowMore}>Know More</Button>
          </ButtonWrapper>
        )}
      </Container>

      <Modal isOpen={!!selectedStartup} onClose={() => setSelectedStartup(null)}>
        {selectedStartup && <StartupDetails startup={selectedStartup} />}
      </Modal>

      <Modal isOpen={isAdvancedFilterOpen} onClose={() => setIsAdvancedFilterOpen(false)}>
        <AdvancedFilterForm onConfirm={() => setIsAdvancedFilterOpen(false)} />
      </Modal>
    </Section>
  );
};

export default PortfolioSection;
