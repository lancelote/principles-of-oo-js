let person = {
    _name: "Nicholas",

    get name() {
        console.log("... reading name");
        return this._name;
    },

    set name(value) {
        console.log(`... setting name to ${value}`);
        this._name = value;
    }
};

console.log(person.name);
person.name = "Greg";
console.log(person.name);
