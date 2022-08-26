const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.createProduct = catchAsyncErrors(async(req,res,next)=>{
    const product = await Product.create(req.body);
    
    res.status(201).json({
        sucess:true,
        product
    });

});
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
    const products = await Product.find();
  
  
    res.status(200).json({
      success: true,
      products
    });
  });
///
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {

    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHander("Product not found", 404));
      }

      res.status(200).json({
        success:true,
        product
    }); 
});
/// admin
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
  
    if (!product) {
      return res.status(500).json({
        success:false,
        message:"product not found"
      })
    }

    product = await product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })
    res.status(200).json({
        success:true,
        product
    });
});  
  
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(500).json({
            success:false,
            message:"product not found"
        })
      }
    await product.remove();  
    res.status(200).json({
        success:true,
        message:"product deleted"
    });
});