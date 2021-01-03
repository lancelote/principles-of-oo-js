const person = {
    name: "Nicholas"
};

const descriptor = Object.getOwnPropertyDescriptor(person, "name");

console.log(descriptor.enumerable);   // true
console.log(descriptor.configurable); // true
console.log(descriptor.writable);     // true
console.log(descriptor.value);        // Nicholas
