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

const person = mixin(new EventTarget(), {
    name: "Nicholas",

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

person.sayName();
