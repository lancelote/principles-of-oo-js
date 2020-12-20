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

sayNameForAll.apply(globalThis, ["global"]);
sayNameForAll.apply(person1, ["person1"]);
sayNameForAll.apply(person2, ["person2"]);
