const express = require("express");

const router = express.Router();

const upload =
require("../middleware/multer");


const {

  addProduct,
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct

} = require("../controllers/ProductController");


// ================= ADD PRODUCT =================

router.post(
  "/products",
  upload.single("image"),
  addProduct
);


// ================= GET ALL PRODUCTS =================

router.get(
  "/products",
  getProducts
);


// ================= GET SINGLE PRODUCT =================

router.get(
  "/products/:id",
  getProductById
);


// ================= UPDATE PRODUCT =================

router.put(
  "/products/:id",
  updateProduct
);


// ================= DELETE PRODUCT =================

router.delete(
  "/products/:id",
  deleteProduct
);


module.exports = router;