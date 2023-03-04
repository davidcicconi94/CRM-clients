const Product = require("../models/Products");

exports.newProduct = async (req, res, next) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.json({ msg: "New product added succesfully!" });
  } catch (error) {
    console.error(error);
    next();
  }
};
