const Product = require("../models/productModels");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors =  require('../middlewares/CatchAsyncErrors')

//create product--Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

//Get All Product
exports.getAllProducts = catchAsyncErrors(async (req, res) => {

  //ApiFeatures(product.find(), req.query.keyword) 
  const apifeature= new ApiFeatures(product.find(),req.query).search();

  
  const products = await Product.find();
  res.status(200).json({ success: true, products });
});

//Get Product Detail or Get Single Product
exports.getProductDetail = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
});

//Update product --Admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
    
    // return res.status(500).json({
    //   success: false,
    //   message: "Product not found",
    // });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
});
//Delete product
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }
  await product.remove();
  res.status(200).json({
    success: true,
    message: "Product deteted successfully",
  });
});
