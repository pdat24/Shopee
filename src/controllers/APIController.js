const getCollection = require("../models");
const { ObjectId } = require("mongodb");

class APIController {
    static async getDataByType(req, res) {
        const type = req.params.type;
        const data = await getCollection(type);
        const src = await data?.find().toArray();
        if (src?.length) res.json(await data.find().toArray());
        else res.status(204).json({ message: "Resource not found" });
    }
    static async changeDataByType(req, res) {
        const type = req.params.type;
        const data = await getCollection(type);
        const src = await data.find().toArray();
        if (src?.length) res.status(200).json({ message: "ok" });
        else res.status(204).json({ message: "Resource not found" });
    }
}

module.exports = APIController;
