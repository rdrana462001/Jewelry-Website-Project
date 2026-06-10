const express = require("express");
const router = express.Router();

const {
  signup,
  login,
  getUsers,
  deleteUser,
  updateUser,
  getUserById,
  updateUserCart,
  updateUserWishlist,
} = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);
router.put("/users/:id/cart", updateUserCart);
router.put("/users/:id/wishlist", updateUserWishlist);

module.exports = router;

