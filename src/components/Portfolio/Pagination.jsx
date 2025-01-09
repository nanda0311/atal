import React from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const PageButton = styled.button`
  background-color: ${({ isActive }) => (isActive ? '#2563eb' : '#f3f4f6')};
  color: ${({ isActive }) => (isActive ? 'white' : '#1f2937')};
  border: none;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2563eb;
    color: white;
  }

  &:disabled {
    background-color: #e5e7eb;
    color: #9ca3af;
    cursor: not-allowed;
  }
`;

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <PaginationWrapper>
      <PageButton 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        Previous
      </PageButton>

      {Array.from({ length: totalPages }, (_, idx) => (
        <PageButton
          key={idx}
          isActive={currentPage === idx + 1}
          onClick={() => onPageChange(idx + 1)}
        >
          {idx + 1}
        </PageButton>
      ))}

      <PageButton 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        Next
      </PageButton>
    </PaginationWrapper>
  );
};

export default Pagination;
