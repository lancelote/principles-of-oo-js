let person = {
    _name: "Nicholas"
};

Object.defineProperty(person, "name", {
    get: function() {
        console.log("... reading name");
        return this._name;
    },
    set: function(value) {
        console.log("... setting name to %s", value);
        this._name = value;
    },
    enumerable: true,
    configurable: true
});

console.log(person.name);
person.name = "Pavel";
console.log(person.name);
