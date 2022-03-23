import { render, screen } from '@testing-library/react';
import Todos from './Todos';

const MOCK_DATA = [
  {
    due_on: "2022-03-28T00:00:00.000+05:30",
    id: 1962,
    status: "completed",
    title: "Timidus capitulus corrigo viriliter nesciunt clibanus solus.",
    user_id: 4071
  },
  {
    due_on: "2022-03-27T00:00:00.000+05:30",
    id: 1963,
    status: "pending",
    title: "Lorem ipsum",
    user_id: 4072
  }
];

describe('Todos', () => {
  it('should render list of 2 todos', () => {
    render(<Todos todos={MOCK_DATA} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});

