function Person(name) {
    this.name = name;
}

Person.prototype = {
    constructor: Person,

    sayName: function () {
        console.log(this.name);
    },

    toString: function () {
        return `[Person ${this.name}]`;
    }
};

const person1 = new Person("Nicholas");
const person2 = new Person("Greg");

console.log(person1 instanceof Person);      // true
console.log(person1.constructor === Person); // true
console.log(person1.constructor === Object); // false

console.log(person2 instanceof Person);      // true
console.log(person2.constructor === Person); // true
console.log(person2.constructor === Object); // false
