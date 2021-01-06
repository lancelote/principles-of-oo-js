function Person(name) {
    this.name = name;
}

Person.prototype = {
    constructor: Person,

    sayName() {
        console.log(this.name);
    },

    toString() {
        return `[Person ${this.name}]`;
    }
};

const person1 = new Person("Nicholas");
const person2 = new Person("Greg");

console.log("sayHi" in person1); // false
console.log("sayHi" in person2); // false

Person.prototype.sayHi = function () {
    console.log("hi");
};

person1.sayHi(); // Hi
person2.sayHi(); // Hi
