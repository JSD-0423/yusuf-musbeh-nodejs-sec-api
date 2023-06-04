const express = require("express");
const userRouter = require("./routes/user-route")
const app = express();

app.use(express.json())

app.use(userRouter)

app.listen(3000,()=>console.log("server now is running on port 3000"))