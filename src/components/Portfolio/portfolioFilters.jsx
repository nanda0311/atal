import React from 'react';

const PortfolioFilters = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div style={styles.container}>
      {categories.map(category => (
        <button
          key={category}
          style={{
            ...styles.button,
            backgroundColor: activeCategory === category ? '#FF5722' : '#f1f1f1', // Orange color
            color: activeCategory === category ? '#fff' : '#000',
          }}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
};

export default PortfolioFilters;
