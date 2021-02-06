const { mongoose } = require("./index");
const shortid = require("shortid");

const productSchema = mongoose.Schema({
  _id: {
    type: String,
    default: shortid.generate,
  },
  title: String,
  decripton: String,
  image: String,
  price: Number,
  availableSizes: [String],
});
module.exports = mongoose.model("Product", productSchema, "products");
