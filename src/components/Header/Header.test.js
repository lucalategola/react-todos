import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('should render the title text', () => {
    render(<Header title="Title" />);

    const h1Element = screen.getByText(/title/i);

    expect(h1Element).toBeInTheDocument();
  });
});
