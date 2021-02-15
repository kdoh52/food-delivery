const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema({
  // id: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, required: true },
});

// userSchema.plugin(passportLocalMongoose);

// hash user password before saving into database
userSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

userSchema.methods.comparePassword = function comparePassword(
  password,
  callback
) {
  bcrypt.compare(password, this.password, callback);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
