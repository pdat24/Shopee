const { cartController } = require("../controllers");
const { Router } = require("express");
const router = Router();

// request methods
router.get("/", cartController.get);

module.exports = router;
