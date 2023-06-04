const {Router, response} = require("express");
const userController = require("../controllers/user-controller");

const router = Router();

router.get("/books",userController.getBooks);
router.get("/books/:id",userController.getBookById)
router.post("/books",userController.postBook);

module.exports = router;