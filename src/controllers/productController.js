const getCollection = require("../models");
const { ObjectId } = require("mongodb");

class ProductController {
    static async get(req, res) {
        const _id = req.params.id;
        const data = await getCollection("suggestedItems");
        const product = await data.findOne({ _id: new ObjectId(_id) });
        res.render("pages/productDetail", { product, layout: "productLayout" });
    }
}

module.exports = ProductController;
