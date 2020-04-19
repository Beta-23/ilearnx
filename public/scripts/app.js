'use strict';

// arguments object - no longer bound with arrow funtions

var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};

console.log(add(1, 2));

// this keyword - no longer bound

var user = {
    name: 'Jordan',
    cities: ['PA', 'NY', 'WA'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};
// call the user object
console.log(user.printPlacesLived());

var multiplier = {
    numbers: [5, 8, 4],
    multiplyBy: 5,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (newnum) {
            return _this2.multiplyBy * newnum;
        });
    }
};

console.log(multiplier.multiply());
