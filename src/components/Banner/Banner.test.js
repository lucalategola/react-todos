import { render, screen } from '@testing-library/react';
import Banner from './Banner';

describe('Banner', () => {
  it('should render warning class if pass type props warning', () => {
    render(<Banner type='warning' />);

    const bannerElement = screen.getByTestId('banner');

    expect(bannerElement.classList.contains('warning')).toBe(true);
  });

  it('should render info class if pass type props info', () => {
    render(<Banner type='info' />);

    const bannerElement = screen.getByTestId('banner');

    expect(bannerElement.classList.contains('info')).toBe(true);
  });
});

