const person = (function () {
    let age = 25;

    return {
        name: "Nicholas",

        getAge: function () {
            return age;
        },

        growOlder: function () {
            age++;
        }
    };
}());

console.log(person.name);     // Nicholas
console.log(person.getAge()); // 25

person.age = 100;
console.log(person.getAge()); // 25

person.growOlder();
console.log(person.getAge()); // 26
