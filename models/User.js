const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  year: { type: String, required: true },
  image: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
