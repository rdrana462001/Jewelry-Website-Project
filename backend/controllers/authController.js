const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const existingUser =
      await User.findOne({ email });

    if (existingUser) {

      return res.status(400).json({
        message: "User Already Exists",
      });

    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await User.create({

      name,
      email,
      password: hashedPassword,

    });

    res.status(201).json({
      message: "Signup Success",
      user,
    });

  }

  catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

exports.login = async (req, res) => {

  try {

    const {
      email,
      password,
      role,
    } = req.body;


    // ================= ADMIN LOGIN =================

    if (role === "admin") {

      if (

        email === "admin@gmail.com" &&

        password === "12345678"

      ) {

        const token = jwt.sign(

          {
            role: "admin",
          },

          process.env.JWT_SECRET,

          {
            expiresIn: "7d",
          }

        );

        return res.status(200).json({

          message:
            "Admin Login Success",

          token,

          user: {

            email:
              "admin@gmail.com",

            role: "admin",

          },

        });

      }

      else {

        return res.status(400).json({

          message:
            "Invalid Admin Credentials",

        });

      }

    }


    // ================= USER LOGIN =================

    const user =
      await User.findOne({ email });

    if (!user) {

      return res.status(400).json({

        message: "User Not Found",

      });

    }

    const isMatch =
      await bcrypt.compare(

        password,

        user.password

      );

    if (!isMatch) {

      return res.status(400).json({

        message:
          "Invalid Password",

      });

    }

    const token = jwt.sign(

      {
        id: user._id,
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d",
      }

    );

    res.status(200).json({

      message:
        "User Login Success",

      token,

      user,

    });

  }

  catch (error) {

    res.status(500).json({

      message:
        error.message,

    });

  }

};

// ================= GET ALL USERS =================

exports.getUsers = async (req, res) => {

  try {

    const users = await User.find();

    res.status(200).json(users);

  }

  catch (error) {

    res.status(500).json({

      message: error.message,

    });

  }

};


// ================= DELETE USER =================

exports.deleteUser = async (req, res) => {

  try {

    await User.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({

      message: "User Deleted",

    });

  }

  catch (error) {

    res.status(500).json({

      message: error.message,

    });

  }

};


// ================= UPDATE USER =================

exports.updateUser = async (req, res) => {

  try {

    const { name, email, phone, city, address, notes, photo } =
      req.body;

    const updatedUser =
      await User.findByIdAndUpdate(

        req.params.id,

        {
          name,
          email,
          phone,
          city,
          address,
          notes,
          photo,
        },

        {
          new: true,
        }

      );

    res.status(200).json(
      updatedUser
    );
  }

  catch (error) {

    res.status(500).json({

      message: error.message,

    });

  }

};

// ================= GET USER BY ID =================

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================= UPDATE USER CART =================

exports.updateUserCart = async (req, res) => {
  try {
    const { cart } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { cart },
      { new: true }
    );
    res.status(200).json(updatedUser.cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================= UPDATE USER WISHLIST =================

exports.updateUserWishlist = async (req, res) => {
  try {
    const { wishlist } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { wishlist },
      { new: true }
    );
    res.status(200).json(updatedUser.wishlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    res.status(200).json({
      message: "Reset link sent successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};