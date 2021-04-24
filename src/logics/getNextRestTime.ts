import getLastRestTime from './getLastRestTime';

const getWorkValues = async (): Promise<{
  workHour: number;
  workMinute: number;
}> => {
  return new Promise((resolve) => {
    chrome.storage.local.get(['workHour', 'workMinute'], (result: any) =>
      resolve(result)
    );
  });
};

const getNextRestTime = async () => {
  const [lastRestTime, { workHour, workMinute }] = await Promise.all([
    getLastRestTime(),
    getWorkValues(),
  ]);

  lastRestTime.add(workHour, 'hours');
  lastRestTime.add(workMinute, 'minutes');

  return lastRestTime;
};

export default getNextRestTime;
