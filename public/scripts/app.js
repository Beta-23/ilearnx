'use strict';

// Var Can be re-assigned and scoped to a function
var nameVar = 'Bryant';
var nameVar = 'Mike';
console.log('Hi, ' + nameVar);

function getPetName() {
    var petName = 'Larry';
    return petName;
}
// petName is in the Global scope here
var petName = getPetName();
console.log(petName);

// Can't re-define a variable with let and const
var nameLet = 'Jet';
nameLet = 'Logan';
console.log('Hi, ' + nameLet);

var nameConst = 'Ed';
console.log('Hi, ' + nameConst);

// Block scoping, prevent escape of variables (expect UUID to print twice)

var fullName = 'UUID DID';
var firstName = void 0;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);
