const { Router } = require("express");
const router = Router();
const { signupController } = require("../controllers");

router.get("/", signupController.get);
router.post("/", signupController.post);

module.exports = router;
