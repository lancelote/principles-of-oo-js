const mixin = (receiver, supplier) => {
    for (const property in supplier) {
        if (supplier.hasOwnProperty(property)) receiver[property] = supplier[property];
    }
    return receiver;
}

function EventTarget() {}

EventTarget.prototype = {
    constructor: EventTarget,

    addListener: function(type, listener) {
        if (!this.hasOwnProperty("_listeners")) this._listeners = [];
        if (typeof this._listeners[type] == "undefined") this._listeners[type] = [];
        this._listeners[type].push(listener);
    },

    fire: function(event) {
        if (!event.target) event.target = this;
        if (!event.type) throw new Error("event object doesn't have type");
        if (this._listeners && this._listeners[event.type] instanceof Array) {
            const listeners = this._listeners[event.type];
            for (const listener of listeners) listener.call(this, event);
        }
    },

    removeListener: function(type, listener) {
        if (this._listeners && this._listeners[type] instanceof Array) {
            const listeners = this._listeners[type];
            for (let i = 0; i < listeners.length; i++) {
                if (listener[i] === listener) {
                    listeners.splice(i, 1);
                    break;
                }
            }
        }
    }
}

// Basic usage
// -----------

const target = new EventTarget();
target.addListener("message", (event) => {
    console.log(`Message is "${event.data}"`);
});
target.fire({
    type: "message",
    data: "hello world",
});

// Creating new event-supportable object manually
// ----------------------------------------------

const personEvent = new EventTarget();
personEvent.name = "Nicholas";
personEvent.sayName = function() {
    console.log(this.name);
    this.fire({
        type: "namesaid",
        name: name
    });
};

// Creating new event-supportable object using pseudo-classical inheritance
// ------------------------------------------------------------------------

function Person(name) {
    this.name = name;
}

Person.prototype = Object.create(EventTarget.prototype);
Person.prototype.constructor = Person;

Person.prototype.sayName = function () {
    console.log(this.name);
    this.fire({
        type: "namesaid",
        name: name
    })
};

const person = new Person("Nicholas");

console.log(person instanceof Person);      // true
console.log(person instanceof EventTarget); // true

// Using Mixin instead
// -------------------

function MixinPerson(name) {
    this.name = name;
}

mixin(MixinPerson.prototype, new EventTarget());
mixin(MixinPerson.prototype, {
    constructor: Person,

    sayName: function () {
        console.log(this.name);
        this.fire({
            type: "namesaid",
            name: name
        });
    }
});

const mixinPerson = new MixinPerson("Nicholas");

console.log(mixinPerson instanceof MixinPerson); // true
console.log(mixinPerson instanceof EventTarget); // false
