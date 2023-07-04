class HomeController {
    static get(req, res) {
        res.render("pages/home", { layout: "homeLayout", introduce: true, cssFile: "homeStyle" });
    }
}

module.exports = HomeController;
