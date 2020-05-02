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

// subclass of the Person class  
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major
    }
}


const me = new Student('Andi Ann', 26, 'Computer Science');
console.log(me.hasMajor());

const other = new Student();
console.log(other.hasMajor());