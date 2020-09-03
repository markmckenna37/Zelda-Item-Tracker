const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

router.route("/")
  .get(itemsController.findAll)

router
  .route("/update/")
  .post(itemsController.updateList)
  // .get(itemsController.findById)
  // .post(itemsController.update)

module.exports = router;
