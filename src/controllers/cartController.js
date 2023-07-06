const getCollection = require("../models");
const { ObjectId } = require("mongodb");

class CartController {
    static async get(req, res) {
        const data = await (await getCollection("cart")).find();
        const products = await data.toArray();
        res.render("pages/cart", { layout: "cartLayout", cssFile: "cartStyle", products });
    }
    static async addItem(req, res) {
        const { _id } = req.body;
        const data = await (await getCollection("suggestedItems")).findOne({ _id: new ObjectId(_id) });
        if (data) {
            await (
                await getCollection("cart")
            ).insertOne({
                itemUrl: _id,
                desc: data.desc,
                price: data.price,
                img: data.img,
            });
            res.status(201).redirect("/");
        }
        res.status(400);
    }
    static async deleteById(req, res) {
        await (await getCollection("cart")).deleteOne({ _id: new ObjectId(req.params.id) });
        res.status(200).redirect("/cart");
    }
    static async deleteBySelectBox(req, res) {
        const { all, items } = req.body;
        const itemsId = items.map((item) => new ObjectId(item));
        const collection = await getCollection("cart");
        if (all) await collection.deleteMany({});
        else await collection.deleteMany({ _id: { $in: itemsId } });
        res.status(200).redirect("/cart");
    }
}

module.exports = CartController;
