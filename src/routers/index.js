const home = require("./home");
const APIs = require("./API");
const productDetail = require("./productDetail");

function router(app) {
    app.use("/", home);
    app.use("/API", APIs);
    app.use("/product", productDetail);
}

module.exports = router;
