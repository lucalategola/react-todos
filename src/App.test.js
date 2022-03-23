import { render, screen, act } from '@testing-library/react';
import App from './App';
import { getTodos } from "./lib/apiClient";

jest.mock("./lib/apiClient");

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

describe('App', () => {
  it("fetches todos from an API and displays them", async () => {

    getTodos.mockResolvedValueOnce(MOCK_DATA);

    render(<App />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    expect(getTodos).toHaveBeenCalledTimes(1);

    const todos = await screen.findAllByRole('listitem');

    expect(todos).toHaveLength(2);
  });
});
