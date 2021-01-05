function Person (name) {
    Object.defineProperty(this, "name", {
        get: function () {
            return name;
        },
        set: function (value) {
            name = value;
        }
    });

    this.sayName = function () {
        console.log(this.name);
    };
}

const person = new Person("Pavel");
console.log(person.name);
person.sayName();
