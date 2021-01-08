const book = {
    title: "The Principles of Object-Oriented JavaScript",
    toString: function () {
        return `[Book "${this.title}"]`;
    }
};

const message = `Book = ${book}`;
console.log(message);
