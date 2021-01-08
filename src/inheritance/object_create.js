const person1 = {
    name: "Nicholas",
    sayName: function () {
        console.log(this.name);
    }
};

const person2 = Object.create(person1, {
    name: {
        configurable: true,
        enumerable: true,
        value: "Greg",
        writable: true
    }
});

person1.sayName(); // Nicholas
person2.sayName(); // Greg

console.log(person1.hasOwnProperty("sayName")); // true
console.log(person1.isPrototypeOf(person2));       // true
console.log(person2.hasOwnProperty("sayName")); // false
