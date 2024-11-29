import React, { useState } from 'react';
import PortfolioFilters from '../components/Portfolio/portfolioFilters';
import PortfolioCard from '../components/Portfolio/portfolioCard';

const portfolioData = [
  { id: 1, category: 'Ongoing', title: 'Startup A', description: 'Innovative AI solutions.' },
  { id: 2, category: 'Graducated', title: 'Startup B', description: 'Revolutionizing health tech.' },
  { id: 3, category: 'sisfs', title: 'Startup C', description: 'Online learning platform.' },
  { id: 4, category: 'Technology', title: 'Startup D', description: 'Blockchain-based solutions.' },
];

const categories = ['All', 'Ongoing', 'Graducated', 'SISFS'];

const Portfolio = () => {
  const [filteredCategory, setFilteredCategory] = useState('All');

  const filteredData =
    filteredCategory === 'All'
      ? portfolioData
      : portfolioData.filter(item => item.category === filteredCategory);

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Portfolio</h1>
      <PortfolioFilters
        categories={categories}
        activeCategory={filteredCategory}
        onCategoryChange={setFilteredCategory}
      />
      <div style={styles.grid}>
        {filteredData.map(item => (
          <PortfolioCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
};

export default Portfolio;
