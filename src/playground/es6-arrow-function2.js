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
    printPlacesLived() {
        return this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        }); 
    }
};
// call the user object
console.log(user.printPlacesLived());