const mixin = (receiver, supplier) => {
    // Use Object.getOwnPropertyNames() to copy non-enumerable properties as well
    Object.keys(supplier).forEach((property) => {
        const descriptor = Object.getOwnPropertyDescriptor(supplier, property);
        Object.defineProperty(receiver, property, descriptor);
    });

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

const person = mixin(new EventTarget(), {
    get name() {
        return "Nicholas";
    },

    sayName: function () {
        console.log(this.name);
        this.fire({
            type: "namesaid",
            name: this.name
        });
    }
});

person.addListener("namesaid", (event) => {
    console.log(`name is "${event.name}"`);
})

console.log(person.name); // Nicholas

person.name = "Greg";     // Should have no effect as there is no setter
console.log(person.name); // Nicholas

person.sayName();
