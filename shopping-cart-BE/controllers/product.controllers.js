const Product = require("./../models/product.model");
exports.getProduct = async (req, res) => {
  const products = await Product.find({});
  res.send(products);
};

exports.createProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
};
exports.deleteProduct = async (req, res) => {
  const deleteProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deleteProduct);
};
