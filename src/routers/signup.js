const { Router } = require("express");
const router = Router();
const { signupController } = require("../controllers");
const { usersController } = require("../controllers");

router.get("/", signupController.get);
router.post("/", usersController.post);

module.exports = router;
