// arguments object - no longer bound with arrow funtions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(1,2));

// this keyword - no longer bound

const user = {
    name: 'Jordan',
    cities: ['PA', 'NY', 'WA'],
    printPlacesLived: function() {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });   
    }
};
// call the user object
user.printPlacesLived();