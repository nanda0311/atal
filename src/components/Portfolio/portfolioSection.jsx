import React, { useState } from 'react';
import styled from 'styled-components';
import { portfolioData } from './data/portfolioData';
import PortfolioFilters from './PortfolioFilters';
import PortfolioCard from './PortfolioCard';
import Modal from './UI/Modal';
import StartupDetails from './StartupDetail';
import AdvancedFilterForm from './AdvancedFilterForm';

const categories = ['All', 'Ongoing', 'Graduated', 'AdvancedFilterIcon'];

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
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: #4b5563;
  max-width: 42rem;
  margin: 0 auto;
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
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

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
  const [advancedFilters, setAdvancedFilters] = useState({
    founded: '',
    sector: '',
  });

  // Filter portfolioData based on selected category and advanced filters
  const filteredData = activeCategory === 'All'
    ? portfolioData
    : portfolioData.filter(item => item.category === activeCategory);

  // Apply advanced filters (sector and founded year)
  const advancedFilteredData = filteredData.filter(item => {
    const matchesYear = !advancedFilters.founded ||
      parseInt(item.founded) === parseInt(advancedFilters.founded);
    const matchesSector = !advancedFilters.sector ||
      item.sector.toLowerCase().includes(advancedFilters.sector.toLowerCase());
    return matchesYear && matchesSector;
  });

  // Slice the data to show the limited number of items
  const visibleData = advancedFilteredData.slice(0, visibleCount);

  const handleStartupClick = (startup) => {
    setSelectedStartup(startup);
  };

  const handleKnowMore = () => {
    setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE);
  };

  const handleAdvancedFilterConfirm = () => {
    // Stay on 'All' but apply the advanced filter
    setIsAdvancedFilterOpen(false);
    setActiveCategory('All'); // Ensure we're still showing 'All' items, filtered by advanced filter
    setVisibleCount(ITEMS_PER_PAGE); // Reset pagination
  };

  const handleCategoryChange = (category) => {
    // If switching to Advanced Filter, open the modal
    if (category === 'AdvancedFilterIcon') {
      setIsAdvancedFilterOpen(true);  // Open advanced filter modal
    } else {
      // Reset advanced filters when selecting other categories
      setAdvancedFilters({ founded: '', sector: '' });
      setActiveCategory(category);
      setVisibleCount(ITEMS_PER_PAGE); // Reset visible items
    }
  };

  return (
    <Section>
      <Container>
        <Header>
          <Title>Our Portfolio</Title>
          <Subtitle>
            Discover our diverse portfolio of innovative startups and success stories.
          </Subtitle>
        </Header>

        <PortfolioFilters
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          onAdvancedFilterClick={() => setIsAdvancedFilterOpen(true)}
        />

        <Grid>
          {visibleData.map(item => (
            <PortfolioCard
              key={item.id}
              {...item}
              onClick={() => handleStartupClick(item)}
            />
          ))}
        </Grid>

        {visibleCount < advancedFilteredData.length && (
          <ButtonWrapper>
            <Button onClick={handleKnowMore}>Know More</Button>
          </ButtonWrapper>
        )}
      </Container>

      <Modal isOpen={!!selectedStartup} onClose={() => setSelectedStartup(null)}>
        {selectedStartup && <StartupDetails startup={selectedStartup} />}
      </Modal>

      <Modal isOpen={isAdvancedFilterOpen} onClose={() => setIsAdvancedFilterOpen(false)}>
        <AdvancedFilterForm
          filters={advancedFilters}
          setFilters={setAdvancedFilters}
          onConfirm={handleAdvancedFilterConfirm}
        />
      </Modal>
    </Section>
  );
};

export default PortfolioSection;
