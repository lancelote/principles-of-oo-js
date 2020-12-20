function sayNameForAll(label) {
    console.log(label + ":" + this.name);
}

const person1 = {
    name: "Nicholas"
};

const person2 = {
    name: "Greg"
}

globalThis.name = "Michael";

sayNameForAll.call(globalThis, "global");
sayNameForAll.call(person1, "person1");
sayNameForAll.call(person2, "person2");
