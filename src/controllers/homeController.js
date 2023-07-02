class HomeController {
    static get(req, res) {
        res.render("pages/home", { layout: "homeLayout", introduce: true });
    }
}

module.exports = HomeController;
