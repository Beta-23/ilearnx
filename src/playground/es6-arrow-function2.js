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
        const that = this;
    
    this.cities.forEach(function(city) {
        console.log(that.name + ' has lived in ' + city);
    });   
    }
};
// call the user object
user.printPlacesLived();