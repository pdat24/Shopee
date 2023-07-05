const { Router } = require("express");
const router = Router();
const { loginController } = require("../controllers");

router.get("/", loginController.get);
router.post("/", loginController.post);

module.exports = router;
