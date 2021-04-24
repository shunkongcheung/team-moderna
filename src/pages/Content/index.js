// import React from 'react';
// import { render } from 'react-dom';
// import moment from 'moment';

import { printLine } from './modules/print';

// import { getNextRestTime } from '../../logics';

// import Popup from './Test';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

// setInterval(async () => {
//   const nextRestTime = await getNextRestTime();
//   const current = moment();
//   console.debug(nextRestTime);
//   if (nextRestTime >= current) {
//   }
// }, 5000);
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
