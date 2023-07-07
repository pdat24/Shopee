const { usersController } = require("../controllers");
const { Router } = require("express");
const router = Router();

// request methods
router.get("/:id", usersController.get);
router.get("/:id/cart", usersController.getCart);
router.post("/:id/cart", usersController.addToCart);
router.post("/:userId/deleteCart/", usersController.deleteCheckedItemInCart);
router.get("/:userId/deleteCart/:itemId", usersController.deleteItemInCart);
router.post("/:userId/uploadAvatar", usersController.uploadAvatar(), usersController.changeAvatar);

module.exports = router;
