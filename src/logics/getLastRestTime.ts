import moment, { Moment } from 'moment';

const getLastRestTime = async (): Promise<Moment> => {
  return new Promise((resolve) => {
    chrome.storage.local.get(['REST_TIME'], ({ REST_TIME }) => {
      resolve(moment(REST_TIME));
    });
  });
};

export default getLastRestTime;
