const home = require("./home");
const APIs = require("./API");
const productDetail = require("./productDetail");
const login = require("./login");
const signup = require("./signup");

function router(app) {
    app.use("/", home);
    app.use("/API", APIs);
    app.use("/product", productDetail);
    app.use("/login", login);
    app.use("/signup", signup);
}

module.exports = router;
