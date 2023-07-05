const getCollection = require("../models");

class SignupController {
    static get(req, res) {
        res.render("pages/signup", { layout: "loginLayout", cssFile: "loginStyle", title: "Đăng ký" });
    }
    static async post(req, res) {
        const { username, password } = req.body;
        await (await getCollection("users")).insertOne({ username, password });
        res.status(201).redirect("/");
    }
}

module.exports = SignupController;
