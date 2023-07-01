const getCollection = require("../models");

class APIController {
    static async getDataByType(req, res) {
        const type = req.params.type;
        const data = await getCollection(type);
        const src = await data.find().toArray();
        if (src.length) res.json(await data.find().toArray());
        else res.status(404).json({ message: "Resource not found" });
    }
}

module.exports = APIController;
