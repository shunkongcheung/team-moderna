import React from 'react';
import { render } from 'react-dom';

import { printLine } from './modules/print';

import Popup from './Reminder';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

const myEle = document.createElement('div');
document.body.insertBefore(myEle, document.body.firstChild);
render(<Popup />, myEle);
