const Product =
require("../models/Product");


// ================= ADD PRODUCT =================

exports.addProduct =
async (req, res) => {

  try {

    const product =
      await Product.create({

        name:
          req.body.name,

        price:
          req.body.price,

        category:
          req.body.category,

        description:
          req.body.description,

        stock:
          req.body.stock,

        image:
          req.file
            ? `/uploads/${req.file.filename}`
            : ""

      });

    res.status(201).json(
      product
    );

  }

  catch (error) {

    res.status(500).json({

      message:
        error.message

    });

  }

};


// ================= GET ALL PRODUCTS =================

exports.getProducts =
async (req, res) => {

  try {

    const products =
      await Product.find();

    res.status(200).json(
      products
    );

  }

  catch (error) {

    res.status(500).json({

      message:
        error.message

    });

  }

};


// ================= GET PRODUCT BY ID =================

exports.getProductById =
async (req, res) => {

  try {

    const product =
      await Product.findById(
        req.params.id
      );

    if (!product) {

      return res.status(404).json({

        message:
          "Product Not Found"

      });

    }

    res.status(200).json(
      product
    );

  }

  catch (error) {

    res.status(500).json({

      message:
        error.message

    });

  }

};


// ================= DELETE PRODUCT =================

exports.deleteProduct =
async (req, res) => {

  try {

    await Product.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({

      message:
        "Product Deleted"

    });

  }

  catch (error) {

    res.status(500).json({

      message:
        error.message

    });

  }

};


// ================= UPDATE PRODUCT =================

exports.updateProduct =
async (req, res) => {

  try {

    const updatedProduct =
      await Product.findByIdAndUpdate(

        req.params.id,

        req.body,

        {
          new: true
        }

      );

    res.status(200).json(
      updatedProduct
    );

  }

  catch (error) {

    res.status(500).json({

      message:
        error.message

    });

  }

};