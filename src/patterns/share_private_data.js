const Person = (function () {
    let age = 25;

    function InnerPerson(name) {
        this.name = name;
    }

    InnerPerson.prototype.getAge = function () {
        return age;
    };

    InnerPerson.prototype.growOlder = function () {
        age++;
    };

    return InnerPerson;
}());

const person1 = new Person("Nicholas");
const person2 = new Person("Greg");

console.log(person1.name);     // Nicholas
console.log(person1.getAge()); // 25

console.log(person2.name);     // Greg
console.log(person2.getAge()); // 25

person1.growOlder();

console.log(person1.getAge()); // 26
console.log(person2.getAge()); // 26
