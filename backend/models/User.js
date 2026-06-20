const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  name: String,

  email: {
    type: String,
    unique: true,
  },

  password: String,

  phone: String,
  city: String,
  address: String,
  notes: String,
  photo: String,
});

module.exports =
mongoose.model("User", userSchema);
