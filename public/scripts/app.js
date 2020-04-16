"use strict";

// ES5
var square = function square(x) {
    return x * x;
};

console.log(square(8));

// ES6 arrow function
var squareArrow = function squareArrow(x) {
    return x * x;
};
console.log(squareArrow(10));

// ES6 implicit arrow function
var squareArrow2 = function squareArrow2(x) {
    return x * x;
};

console.log(squareArrow2(9));
