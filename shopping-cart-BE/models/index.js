const mongoose = require("mongoose");
const mongoDB = () => {
  return mongoose
    .connect("mongodb://localhost/react-shopping-cart-db", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database is connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  mongoDB,
  mongoose,
};
