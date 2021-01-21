function Person(name) {
    if (this instanceof Person) {
        this.name = name;
    } else {
        return new Person(name);
    }
}

const person1 = Person("Nicholas");
const person2 = new Person("Greg");

console.log(person1.name); // Nicholas
console.log(person2.name); // Greg
