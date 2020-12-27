let person = {
    name: "Nicholas"
};

Object.defineProperty(person, "name", {
    enumerable: false
});

console.log("name" in person);                        // true
console.log(person.propertyIsEnumerable("name"));  // false

let properties = Object.keys(person);
console.log(properties.length);  // 0

Object.defineProperty(person, "name", {
    configurable: false
});

delete person.name;
console.log("name" in person);  // true
console.log(person.name);       // "Nicholas"

// Error
Object.defineProperty(person, "name", {
    configurable: true
});
