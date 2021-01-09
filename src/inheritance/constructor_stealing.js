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

// Steal constructor
function Square(size) {
    Rectangle.call(this, size, size);

    // Add new properties here or override old ones
}

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
};

const square = new Square(6);

console.log(square.length);    // 6
console.log(square.width);     // 6
console.log(square.getArea()); // 36
