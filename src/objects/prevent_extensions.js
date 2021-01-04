const person = {
    name: "Nicholas"
};

console.log(Object.isExtensible(person)); // true
Object.preventExtensions(person);
console.log(Object.isExtensible(person)); // false

person.age = 42;

console.log("age" in person); // false
