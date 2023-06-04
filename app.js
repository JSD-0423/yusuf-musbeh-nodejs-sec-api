const express = require("express");
const userRouter = require("./routes/user-route")
const createFileMiddleWare = require("./middlerwares/create-file-middleware")
const app = express();

app.use(express.json())
app.use(createFileMiddleWare);
app.use(userRouter)

app.listen(3000, () => console.log("server now is running on port 3000"))