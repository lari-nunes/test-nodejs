const express  = require("express");
const productRouter = require("./routes/post");
const userRouter = require("./routes/user");

const server = express();


server.use(express.json());
server.use(post.Router);
server.use(userRouter);


module.exports = server;