const { Router } = require("express");
const { APIController } = require("../../controllers");
const router = Router();

router.get("/:type", APIController.getDataByType);

module.exports = router;
