const fs = require("fs");
const path = require("path");

const FILEPATH = path.join(__dirname, "..", "data", "books.json");
exports.readBooks = () => {
    const data = fs.readFileSync(FILEPATH, "utf8");
    return JSON.parse(data);
}

exports.writeBooks = (data) => {
 console.log(data);
    fs.writeFileSync(FILEPATH, JSON.stringify(data))
}