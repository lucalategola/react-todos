import { render, screen, fireEvent } from '@testing-library/react';
import Filter from './Filter';

export const filtersValue = [
  {
    label: 'Completed',
    value: 'completed'
  },
  {
    label: 'Pending',
    value: 'pending'
  }
];

const filter = filtersValue[0];

describe('Filter', () => {
  it('should render the label Completed', () => {

    render(<Filter filter={filter} />);

    const spanElement = screen.getByText(/completed/i);

    expect(spanElement).toBeInTheDocument();
  });

  it('change class to checked when clicked', () => {
    const mockFilterClick = jest.fn();

    render(<Filter filter={filter} onFilterClick={mockFilterClick} />)

    const chipElement = screen.getByTestId('chip');

    fireEvent.click(chipElement);

    expect(chipElement.classList.contains('checked')).toBe(true);
  });

  it('calls the onFilterClick callback handler', () => {
    const mockFilterClick = jest.fn();

    render(<Filter filter={filter} onFilterClick={mockFilterClick} />)

    const chipElement = screen.getByTestId('chip');

    fireEvent.click(chipElement);

    expect(mockFilterClick).toHaveBeenCalledTimes(1);
  });
})



