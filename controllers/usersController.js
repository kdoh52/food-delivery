const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Defining methods for the usersController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.User.findById(req.params.id)
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        if (err) throw err;
      });
  },
  create: (req, res) => {
    db.User.create(req.body)
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        if (err) throw err;
      });
  },
  update: (req, res) => {
    db.User.findOneAndUpdate({ _id: req.params.id }, { $push: req.body })
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        if (err) throw err;
      });
  },
  remove: (req, res) => {
    db.User.findById({ _id: req.params.id })
      .then((users) => {
        users.remove();
      })
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        if (err) throw err;
      });
  },
  authenticate: function (req, res, next) {
    userModel.findOne({ email: req.body.email }, function (err, userInfo) {
      if (err) {
        next(err);
      } else {
        if (bcrypt.compareSync(req.body.password, userInfo.password)) {
          const token = jwt.sign(
            { id: userInfo._id },
            req.app.get("secretKey"),
            { expiresIn: "1h" }
          );
          res.json({
            status: "success",
            message: "user found!!!",
            data: { user: userInfo, token: token },
          });
        } else {
          res.json({
            status: "error",
            message: "Invalid email/password!!!",
            data: null,
          });
        }
      }
    });
  },
};
