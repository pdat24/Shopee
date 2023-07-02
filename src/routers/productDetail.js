const { Router } = require("express");
const router = Router();
const { productController } = require("../controllers");

router.get("/:id", productController.get);

module.exports = router;
