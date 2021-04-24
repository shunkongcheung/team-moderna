import moment from 'moment';
import { getNextRestTime } from '../../logics';

setInterval(async () => {
  const nextRestTime = await getNextRestTime();
  const current = moment();

  // in seconds
  const remainTime = (nextRestTime - current) / 1000;

  if (remainTime > 0) {
    const hours = Math.floor(remainTime / 3600);
    const seconds = remainTime % 3600;
    const minutes = Math.ceil(seconds / 60);

    if (hours > 0) {
      chrome.action.setBadgeText({ text: `${hours}hr` });
      chrome.action.setBadgeBackgroundColor({ color: `#ffadad` });
    } else {
      chrome.action.setBadgeText({ text: `${minutes}min` });
      if (minutes > 30)
        chrome.action.setBadgeBackgroundColor({ color: `#a0c4ff` });
      else chrome.action.setBadgeBackgroundColor({ color: `#bdb2ff` });
    }
  }
}, 5000);
