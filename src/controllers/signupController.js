class SignupController {
    static get(req, res) {
        res.render("pages/signup", { layout: "loginLayout", cssFile: "loginStyle", title: "Đăng ký" });
    }
}

module.exports = SignupController;
