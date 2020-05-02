class Person {
    constructor(name = 'Anonymous', age= 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi I am ${this.name}!`;
    }
    getDescription() {
        return `Hi, this is ${this.name} and I am ${this.age} years old`;
    }
}

const me = new Person('Andi Ann', 26);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());