const { homeController } = require("../controllers");
const { Router } = require("express");
const router = Router();

// request methods
router.get("/", homeController.get);

module.exports = router;
