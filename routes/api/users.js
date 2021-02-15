const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

router.route("/add").post(usersController.create);

// matches with "/api/users/add"
router.route("/:id")
  .get(usersController.findById);
  
//POST: localhost:3001/api/users/authenticate
router.route("/authenticate")
  .post(usersController.authenticate);

router.route("/delete/:id").delete(usersController.remove);


module.exports = router;


// const router = require("express").Router();
// const usersController = require("../../controllers/usersController");

// // Route for '/api/users'

// //GET: localhost:3001/api/users
// router.route("/").get(usersController.findAll);

// //POST: localhost:3001/api/users/add
// router.route("/add").post(usersController.create);

// //POST: localhost:3001/api/users/authenticate
// router.route("/authenticate").post(usersController.authenticate);

// //GET: localhost:3001/api/users/:id
// router.route("/:id").get(usersController.findById);

// //PUT: localhost:3001/api/users/update/:id
// router.route("/update/:id").put(usersController.update);

// //DELETE: localhost:3001/api/users/delete/:id
// router.route("/delete/:id").delete(usersController.remove);

// // router.route("/updateLikes/:userID/:postID").put(usersController.updateLikes);

// module.exports = router;
