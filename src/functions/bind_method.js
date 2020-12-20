function sayNameForAll(label) {
    console.log(label + ":" + this.name);
}

let person1 = {
    name: "Nicholas"
}

let person2 = {
    name: "Greg"
}

let sayNameForPerson1 = sayNameForAll.bind(person1);
sayNameForPerson1("person1");

let sayNameForPerson2 = sayNameForAll.bind(person2);
sayNameForPerson2("person2");

person2.sayName = sayNameForPerson1;
person2.sayName();
