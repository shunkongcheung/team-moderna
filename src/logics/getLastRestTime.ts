import moment from 'moment';

const getLastRestTime = () => {
  const lastRestStr = window.localStorage.getItem('REST_TIME') as string;
  return moment(lastRestStr);
};

export default getLastRestTime;
