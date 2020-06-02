// import subtract, { square, add } from './utils';
// import isSenior, { isAdult, canDrink } from './person';

// Testing utils
// console.log(square(4));
// console.log(square(2) + add(3,4));
// console.log(subtract(100, 20));

// Testing person utils
// console.log(isAdult(14));
// console.log(canDrink(23));
// console.log(isSenior(64));

// import validator from 'validator';

// console.log(validator.isEmail('test@gmail.com'));

import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'Testing REACT and REACT-DOM!');
ReactDOM.render(template, document.getElementById('app'));