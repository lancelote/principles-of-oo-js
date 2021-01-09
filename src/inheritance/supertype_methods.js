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
    Rectangle.call(this, size, size);
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
    // Call the supertype method
    const text = Rectangle.prototype.toString.call(this);
    return text.replace("Rectangle", "Square");
};

const square = new Square(6);
console.log(square.toString());  // [Square 6x6]
