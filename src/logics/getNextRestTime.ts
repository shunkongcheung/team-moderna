import getLastRestTime from './getLastRestTime';

const getNextRestTime = () => {
  const lastRestTime = getLastRestTime();
  const workHour = window.localStorage.getItem('workHour');
  const workMinute = window.localStorage.getItem('workMinute');

  lastRestTime.add(workHour, 'hours');
  lastRestTime.add(workMinute, 'minutes');

  return lastRestTime;
};

export default getNextRestTime;
