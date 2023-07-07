class CartController {
    static get(req, res) {
        res.render("pages/cart", { layout: "cartLayout", cssFile: "cartStyle" });
    }
}

module.exports = CartController;
