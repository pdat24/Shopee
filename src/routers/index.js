const home = require("./home");
const APIs = require("./API");

function router(app) {
    app.use("/", home);
    app.use("/API", APIs);
}

module.exports = router;
