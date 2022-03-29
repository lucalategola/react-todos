const {formatDate, diffDateFromCurrent} = require('../date.js');

const dateString = '2022-04-18T00:00:00.000+05:30';
const expectedDateString = '17 apr 2022, 20:30:00';
const expectedDaysDiff = 21;

beforeAll(() => {
  jest.useFakeTimers('modern');
  // Set the mock system time to 28/03/2022: month is 0-index
  jest.setSystemTime(new Date(2022, 2, 28));
});

afterAll(() => {
  jest.useRealTimers();
});

describe('date module', () => {
  it('date is properly formatted', () => {
    expect(formatDate(dateString)).toBe(expectedDateString);
  });

  it('date diff is correct', () => {
    expect(diffDateFromCurrent(dateString)).toBe(expectedDaysDiff);
  })

});