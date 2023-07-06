const { cartController } = require("../controllers");
const { Router } = require("express");
const router = Router();

// request methods
router.get("/", cartController.get);
router.post("/", cartController.addItem);
router.get("/delete/:id", cartController.deleteById);
router.post("/delete", cartController.deleteBySelectBox);

module.exports = router;
