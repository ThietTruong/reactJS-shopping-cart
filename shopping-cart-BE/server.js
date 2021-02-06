const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("./routers/product.router");
const { mongoose, mongoDB } = require("./models/index");

const app = express();
app.use(bodyParser.json());
// database
mongoDB();
// config
const port = process.env.PORT || 5000;
// router
app.use("/product", productRouter);
// port
app.listen(port, () => console.log("server at http://localhost:5000"));
