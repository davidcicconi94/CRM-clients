const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Declare the Schema of the Mongo model
const userSchema = new Schema({
  name: {
    type: String,
    required: "Add your name",
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Users", userSchema);
