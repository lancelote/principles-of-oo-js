let person = {};

Object.defineProperties(person, {
    // data property
    _name: {
        value: "Nicholas",
        enumerable: true,
        configurable: true,
        writable: true
    },

    // accessor property
    name: {
        get: function () {
            console.log("... reading name");
            return this._name;
        },
        set: function (value) {
            console.log("... setting name to %s", value);
            this._name = value;
        },
        enumerable: true,
        configurable: true
    }
});
