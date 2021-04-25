import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';

import { printLine } from './modules/print';

import Popup from './Reminder';
import { getNextRestTime } from '../../logics';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

const renderModal = (oldBackground) => {
  // for rendering the modal
  var head = document.getElementsByTagName('HEAD')[0];
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href =
    'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css';
  head.appendChild(link);

  const myEle = document.createElement('div');
  myEle.setAttribute('class', 'reminderModal');
  document.body.insertBefore(myEle, document.body.firstChild);
  render(<Popup oldBackground={oldBackground} />, myEle);
};

const renderSnow = () => {
  const body = document.body;
  const oldBackground = body.style.background;
  body.style.background = '#111';
  body.style["box-shadow"]= "0 3px 7px rgba(0, 0, 0, 0.3);"
  const bar = document.createElement('div');
  bar.setAttribute('class', 'shadow');
  document.body.insertBefore(bar, document.body.firstChild);

  for (let i = 0; i < 100; i++) {
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

    document.body.insertBefore(myEle, document.body.firstChild);
  }

  return oldBackground;
};

let oldBackground;
setInterval(async () => {
  const nextRestTime = await getNextRestTime();
  const current = moment();

  const myEle = document.getElementsByClassName('snowflake');

  // diff in second
  const diff = (nextRestTime - current) / 1000;
  if (diff < 5 && !myEle.length) {
    oldBackground = renderSnow();
    renderModal(oldBackground);
  }
  console.log('hey here', diff);
}, 5000);
