const { Router } = require("express");
const { APIController } = require("../../controllers");
const router = Router();

router.get("/:type", APIController.getDataByType);
router.post("/:type", APIController.changeDataByType);
router.put("/:type", APIController.changeDataByType);
router.delete("/:type", APIController.changeDataByType);

module.exports = router;
