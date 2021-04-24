import React from 'react';
import { render } from 'react-dom';

import { printLine } from './modules/print';

import { getNextRestTime } from '../../logics';

import Popup from './Test';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

setInterval(async () => {
  const nextRestTime = await getNextRestTime();
  const current = moment();
  console.debug(nextRestTime);
  if (nextRestTime >= current) {
    const myEle = document.createElement('div');
    document.body.insertBefore(myEle, document.body.firstChild);
    render(<Popup />, myEle);
  }
}, 5000);
