let person = {
    _name: "Nicholas"
};

Object.defineProperty(person, "name", {
    get: function() {
        console.log("... reading name");
        return this._name;
    }
});

console.log("name" in person); // true
console.log(person.propertyIsEnumerable("name")); // false
delete person.name; // will do nothing
console.log("name" in person); // true
person.name = "Greg"; // will do nothing
console.log(person.name); // Nicholas
