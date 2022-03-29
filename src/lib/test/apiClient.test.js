const { getTodos } = require('../apiClient.js');

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

const unMockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_DATA),
    })
})

afterAll(() => {
  global.fetch = unMockedFetch
})

describe('apiClient module', () => {
  it('getTodos function that fetch results have 2 items', async () => {
    const todos = await getTodos();
    expect(todos).toHaveLength(2);
  })
})