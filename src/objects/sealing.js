let person = {
    name: "Nicholas"
};

console.log(Object.isExtensible(person)); // true
console.log(Object.isSealed(person));     // false

Object.seal(person);

console.log(Object.isExtensible(person)); // false
console.log(Object.isSealed(person));     // true

person.age = 42;
console.log("age" in person); // false

person.name = "Greg";
console.log(person.name); // Greg

delete person.name;
console.log("name" in person); // true
console.log(person.name);      // Greg

const descriptor = Object.getOwnPropertyDescriptor(person, "name");
console.log(descriptor.configurable); // false
