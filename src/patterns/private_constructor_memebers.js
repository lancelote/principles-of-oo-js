function Person(name) {
    let age = 25;

    this.name = name;

    this.getAge = function () {
        return age;
    };

    this.growOlder = function () {
        age++;
    };
}

const person = new Person("Nicholas");

console.log(person.name);     // Nicholas
console.log(person.getAge()); // 25

person.age = 100;
console.log(person.getAge()); // 25

person.growOlder();
console.log(person.getAge()); // 26
