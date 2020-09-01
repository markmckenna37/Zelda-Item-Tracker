const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

router.route("/")
  .get(itemsController.findAll)

router
  .route("/:id")
  .get(itemsController.findById)
  .put(itemsController.update)

module.exports = router;
