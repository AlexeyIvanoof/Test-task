import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('renders the current page correctly', () => {
    const currentPage = 3;
    render(<Pagination currentPage={currentPage} onPageChange={() => {}} />);
    
    expect(screen.getByText(currentPage.toString())).toBeInTheDocument();
  });

  it('disables the "Предыдущий список" button on the first page', () => {
    const currentPage = 1;
    render(<Pagination currentPage={currentPage} onPageChange={() => {}} />);
    
    const prevButton = screen.getByText('Предыдущий список');
    expect(prevButton).toBeDisabled();
  });

  it('enables the "Предыдущий список" button on a page other than the first', () => {
    const currentPage = 2;
    render(<Pagination currentPage={currentPage} onPageChange={() => {}} />);
    
    const prevButton = screen.getByText('Предыдущий список');
    expect(prevButton).not.toBeDisabled();
  });

  it('calls onPageChange with the correct value when "Предыдущий список" is clicked', () => {
    const currentPage = 3;
    const onPageChange = jest.fn();
    render(<Pagination currentPage={currentPage} onPageChange={onPageChange} />);
    
    const prevButton = screen.getByText('Предыдущий список');
    fireEvent.click(prevButton);
    
    expect(onPageChange).toHaveBeenCalledWith(currentPage - 1);
  });

  it('calls onPageChange with the correct value when "Следующий список" is clicked', () => {
    const currentPage = 3;
    const onPageChange = jest.fn();
    render(<Pagination currentPage={currentPage} onPageChange={onPageChange} />);
    
    const nextButton = screen.getByText('Следующий список');
    fireEvent.click(nextButton);
    
    expect(onPageChange).toHaveBeenCalledWith(currentPage + 1);
  });
});