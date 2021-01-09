function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function () {
    return this.length * this.width;
};

Rectangle.prototype.toString = function () {
    return `[Rectangle ${this.length}x${this.width}]`;
};

function Square(size) {
    this.length = size;
    this.width = size;
}

// We may not worry about Rectangle constructor raising error
Square.prototype = Object.create(Rectangle.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: Square,
        writable: true
    }
});

Square.prototype.toString = function () {
    return `[Square ${this.length}x${this.width}]`;
}
