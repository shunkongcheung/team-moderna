// import React from 'react';
// import { render } from 'react-dom';
// import moment from 'moment';

import { printLine } from './modules/print';

import Popup from './Reminder';
import { getNextRestTime } from '../../logics';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

 setInterval(async () => {
   const nextRestTime = await getNextRestTime();
   const current = moment();
   console.debug(nextRestTime);
   if (nextRestTime >= current) {
   }
    chrome.action.setBadgeText({ text: nextRestTime.format('HH:mm') });
}, 5000);
console.log('hey here0');

const body = document.body;
body.style.background = '#111';

for (let i = 0; i < 200; i++) {
  const myEle = document.createElement('div');
  myEle.classList.add('snowflake');

  const size = Math.random() * 2;
  myEle.style.width = `${size}vw`;
  myEle.style.height = `${size}vw`;
  myEle.style.left = `${Math.floor(Math.random() * 100)}vw`;

  const sec = Math.ceil(Math.random() * 10) + 5;
  myEle.style.animation = `snowfall ${sec}s linear infinite`;
  myEle.style['animation-delay'] = `-${Math.random() * 2}s`;
  myEle.style.setProperty('--left-ini', Math.ceil(Math.random() * 10) + 'vw');
  myEle.style.setProperty('--left-end', Math.ceil(Math.random() * 10) + 'vw');

  if (i % 6 !== 0) {
    myEle.style.filter = `blur(1px)`;
  }

  // myEle.style['animation-delay'] = `-${Math.floor(Math.random() * 10)}s`;

  document.body.insertBefore(myEle, document.body.firstChild);
  // render(<Popup />, myEle);
}

console.log('hey here1');

getNextRestTime().then((nextRestTime) => {
  chrome.action.setBadgeText({ text: nextRestTime.format('HH:mm') });
});
// setInterval(async () => {
//   const nextRestTime = await getNextRestTime();
//   const current = moment();
//   console.debug(nextRestTime);
//   if (nextRestTime >= current) {
    var head = document.getElementsByTagName('HEAD')[0]; 
    var link = document.createElement('link');
    link.rel = 'stylesheet'; 
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css';
    head.appendChild(link); 

    const popupEle = document.createElement('div');
    popupEle.setAttribute("class", "reminderModal");
    document.body.insertBefore(popupEle, document.body.firstChild);
    render(<Popup />, popupEle);
//   }
// }, 5000);
