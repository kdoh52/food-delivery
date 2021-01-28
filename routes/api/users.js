const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// matches with "/api/users/add"
router.route("/:id")
  .delete(usersController.remove);
  

module.exports = router;
