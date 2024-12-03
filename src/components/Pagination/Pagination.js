import React from 'react';
import "./Pagination.css"

const Pagination = ({ currentPage, onPageChange, user }) => {
  return (
    <div className='lists-users'>
      <button className='button' onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
      Предыдущий список
      </button>
      <span className='number-list'>{currentPage}</span>
      <button className='button' onClick={() => onPageChange(currentPage + 1)}>Следующий список</button>
    </div>
  );
};

export default Pagination;