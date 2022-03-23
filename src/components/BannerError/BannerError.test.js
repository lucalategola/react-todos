import { render, screen } from '@testing-library/react';
import BannerError from './BannerError';

describe('BannerError', () => {
  it('should render the error message', () => {
    render(<BannerError message="Error message" />);

    const paragraphElement = screen.getByText(/error message/i);

    expect(paragraphElement).toBeInTheDocument();
  });
});
