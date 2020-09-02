const router = require("express").Router();
const checksController = require("../../controllers/checksController");

router.route("/")
  .get(checksController.findAll)
  
router
  .route("/:id")
  .get(checksController.findById)
  .put(checksController.update)

module.exports = router;
