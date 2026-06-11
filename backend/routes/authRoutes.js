const express = require("express");
const router = express.Router();

const {
  signup,
  login,
  getUsers,
  deleteUser,
  updateUser,
} = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);

router.get("/users", getUsers);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);

module.exports = router;

