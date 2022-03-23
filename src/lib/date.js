const dateOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

const MILLISECONDS = 1000;
const SECONDS = 60;
const MINUTES = 60;
const HOURS = 24;

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const dateToLocale = date.toLocaleDateString('it-IT', dateOptions);

  return dateToLocale;
}

export const diffDateFromCurrent = (dateString) => {
  const date = new Date(dateString);
  const currentDate = new Date();

  const diffTime = Math.abs(date - currentDate);
  const diffDays = Math.ceil(diffTime / (MILLISECONDS * SECONDS * MINUTES * HOURS));

  return diffDays;
}
