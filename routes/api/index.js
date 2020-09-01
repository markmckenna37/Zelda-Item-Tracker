const router = require("express").Router();
const itemRoutes = require("./items");
const areaRoutes = require("./areas");
const checkRoutes = require("./checks");

router.use("/areas", areaRoutes);
router.use("/items", itemRoutes);
router.use("/checks", checkRoutes);

module.exports = router;
