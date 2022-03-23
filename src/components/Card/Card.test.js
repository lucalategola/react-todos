import { render, screen } from '@testing-library/react';
import Card from './Card';

const MOCK_DATA = {
  due_on: "2022-03-28T00:00:00.000+05:30",
  id: 1962,
  status: "completed",
  title: "Timidus capitulus corrigo viriliter nesciunt clibanus solus.",
  user_id: 4071
}

describe('Card', () => {
  it('should render the title property of todo', () => {
    render(<Card data={MOCK_DATA} />);

    const h2Element = screen.getByText(/Timidus capitulus/i);

    expect(h2Element).toBeInTheDocument();
  });
});
