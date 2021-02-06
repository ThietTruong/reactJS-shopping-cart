const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const {
  getProduct,
  createProduct,
  deleteProduct,
} = require("../controllers/product.controllers");

router.get("/", getProduct);
router.post("/create", createProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
