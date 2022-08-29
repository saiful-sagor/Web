const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {getAllProducts,createProduct,updateProduct,deleteProduct,getProductDetails}= require("../controllers/productController");



router.route("/product").get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").get(getProductDetails)
// router
//   .route("/product/new")
//   .get(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

router.
route("/product/:id")
.put(isAuthenticatedUser, authorizeRoles("admin"),updateProduct)
.delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)
.get(getProductDetails);


module.exports = router;