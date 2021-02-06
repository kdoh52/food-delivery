const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// matches with "/api/users/add"
router.route("/:id")
  .delete(usersController.remove);
  
//POST: localhost:3001/api/users/authenticate
router.route("/authenticate")
  .post(usersController.authenticate);


module.exports = router;
