const fileSystem = require("../utils/file-system")
const crypto = require("crypto");
exports.getBooks = (request, response, next) => {
    const books = fileSystem.readBooks();
    response.json(books)
};
exports.getBookById = (request, response, next) => {
    const {id} = request.params;
    const book = fileSystem.readBooks().find((book) => book.id == id)
    response.json(book);
};
exports.postBook = (request, response, next) => {
    const {name} = request.body;
    if (!name) return response.status(500).json({statusCode: 500, error: "Name filed required"});
    let id = crypto.randomUUID();
    while (fileSystem.readBooks().find(book => book.id == id)) {
        id = crypto.randomUUID();
    }
    const book = {id: id, name: name};
    const books = fileSystem.readBooks();
    books.push(book);
    fileSystem.writeBooks(books);
    response.json(book);
};

