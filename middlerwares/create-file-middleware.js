const fs = require("fs");
const path = require("path");

module.exports = (request, response, next) => {
    const isExist = fs.existsSync(
        path.join(__dirname, "..", "data", "books.json")
    );
    if (!isExist) {
        fs.writeFileSync(
            path.join(__dirname, "..", "data", "books.json"),
            "[]"
        );
    } else {
        const fileContent = fs.readFileSync(
            path.join(__dirname, "..", "data", "books.json")
        );
        if (fileContent === "") {
            fs.writeFileSync(
                path.join(__dirname, "..", "data", "books.json"),
                "[]"
            );
        }
    }
    next();
};
