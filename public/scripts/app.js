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

        var cityMessages = this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
        return cityMessages;
    }
};
// call the user object
console.log(user.printPlacesLived());
