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

        this.cities.forEach(function (city) {
            console.log(_this.name + ' has lived in ' + city);
        });
    }
};
// call the user object
user.printPlacesLived();
