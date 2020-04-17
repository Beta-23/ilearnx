'use strict';

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

// Test arrow functions

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};
console.log(getFirstName('Mike Lee'));

// implicit arrow function
var getFirstName2 = function getFirstName2(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName2('LEE Ming'));
