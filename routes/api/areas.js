const router = require("express").Router();
const areasController = require("../../controllers/areasController");

router.route("/")
  .get(areasController.findAll)

router
  .route("/:id")
  .get(areasController.findById)
  .put(areasController.update)

module.exports = router;
