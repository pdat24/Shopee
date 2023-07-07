const { usersController } = require("../controllers");
const { Router } = require("express");
const router = Router();

// request methods
router.get("/:id/cart", usersController.getCart);
router.post("/:id/cart", usersController.addToCart);
router.post("/:userId/deleteCart/", usersController.deleteCheckedItemInCart);
router.get("/:userId/deleteCart/:itemId", usersController.deleteItemInCart);

module.exports = router;
