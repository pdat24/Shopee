const getCollection = require("../models");

class LoginController {
    static get(req, res) {
        res.render("pages/login", { layout: "loginLayout", cssFile: "loginStyle", title: "Đăng nhập" });
    }
    static async post(req, res) {
        const { username, password } = req.body;
        const user = await (await getCollection("users")).findOne({ username, password });
        res.send(user || null);
    }
}

module.exports = LoginController;
