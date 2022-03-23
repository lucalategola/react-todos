import { render, screen } from '@testing-library/react';
import BannerInfo from './BannerInfo';

describe('BannerInfo', () => {
  it('should render the info message', () => {
    render(<BannerInfo message="Info message" />);

    const paragraphElement = screen.getByText(/info message/i);

    expect(paragraphElement).toBeInTheDocument();
  });
});
