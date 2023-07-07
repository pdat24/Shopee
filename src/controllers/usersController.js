const getCollection = require("../models");
const { ObjectId } = require("mongodb");

class UsersController {
    //
    static async getCart(req, res) {
        try {
            const _id = req.params.id;
            const data = await getCollection("users");
            const src = await data.findOne({ _id: new ObjectId(_id) });
            res.status(200).send(src.cart);
        } catch (e) {
            console.log(e);
            res.status(404).send("Resource not found");
        }
    }
    //
    static async post(req, res) {
        const { username, password } = req.body;
        await (await getCollection("users")).insertOne({ username, password, cart: [] });
        res.status(201);
        setTimeout(() => {
            res.redirect("/login");
        }, 400);
    }
    //
    static async deleteCheckedItemInCart(req, res) {
        try {
            const { all, items } = req.body;
            const { userId } = req.params;
            const users = await getCollection("users");
            const user = await (await getCollection("users")).findOne({ _id: new ObjectId(userId) });
            if (all) {
                await users.updateOne(
                    { _id: new ObjectId(userId) },
                    {
                        $set: {
                            cart: [],
                        },
                    }
                );
            } else {
                await users.updateOne(
                    { _id: new ObjectId(userId) },
                    {
                        $set: {
                            cart: user.cart.filter((item) => !items.includes(item._id.toString())),
                        },
                    }
                );
            }
            res.status(200).redirect("/cart");
        } catch (e) {
            console.log(e);
            res.status(400).send(null);
        }
    }
    static async deleteItemInCart(req, res) {
        try {
            const { itemId, userId } = req.params;
            const users = await getCollection("users");
            const cart = (await users.findOne({ _id: new ObjectId(userId) })).cart;
            await users.updateOne(
                { _id: new ObjectId(userId) },
                {
                    $set: {
                        cart: cart.filter((item) => {
                            return item._id.toString() !== itemId;
                        }),
                    },
                }
            );
            res.status(200).redirect("/cart");
        } catch (e) {
            console.log(e);
            res.status(400).send(null);
        }
    }
    //
    static async addToCart(req, res) {
        try {
            const { itemId, userId } = req.body;
            const data = await (await getCollection("suggestedItems")).findOne({ _id: new ObjectId(itemId) });
            const user = await getCollection("users");
            const cart = (await user.findOne({ _id: new ObjectId(userId) })).cart;
            await user.updateOne(
                { _id: new ObjectId(userId) },
                {
                    $set: {
                        cart: [
                            ...cart,
                            { _id: new ObjectId(), img: data.img, desc: data.desc, price: data.price, itemUrl: itemId },
                        ],
                    },
                }
            );
            res.status(201).redirect("/");
        } catch (e) {
            console.log(e);
            res.status(400).send(null);
        }
    }
}

module.exports = UsersController;
