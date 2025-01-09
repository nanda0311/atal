import React, { useState } from 'react';
import styled from 'styled-components';
import { portfolioData } from './data/portfolioData';
import PortfolioFilters from './portfolioFilters';
import PortfolioCard from './portfolioCard';
import Modal from './UI/Modal';
import StartupDetails from './StartupDetail';
import Pagination from './Pagination'; // New component for pagination

const categories = ['All', 'Ongoing', 'Graduated', 'SISFS'];

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
  color: #1e3a8a; /* Dark Blue */
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

const ITEMS_PER_PAGE = 15; // Number of cards per page

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedStartup, setSelectedStartup] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = activeCategory === 'All'
    ? portfolioData
    : portfolioData.filter(item => item.category === activeCategory);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const currentPageData = filteredData.slice(startIdx, endIdx);

  const handleStartupClick = (startup) => {
    setSelectedStartup(startup);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
          onCategoryChange={(category) => {
            setActiveCategory(category);
            setCurrentPage(1); // Reset to the first page when category changes
          }}
        />

        <Grid>
          {currentPageData.map(item => (
            <PortfolioCard
              key={item.id}
              {...item}
              onClick={() => handleStartupClick(item)}
            />
          ))}
        </Grid>

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </Container>

      <Modal
        isOpen={!!selectedStartup}
        onClose={() => setSelectedStartup(null)}
      >
        {selectedStartup && <StartupDetails startup={selectedStartup} />}
      </Modal>
    </Section>
  );
};

export default PortfolioSection;
