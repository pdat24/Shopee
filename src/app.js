const express = require("express");
const handlebars = require("express-handlebars");
const logger = require("morgan");
const path = require("path");
const router = require("./routers");
const { repeatContext } = require("./views/helpers");

const app = express();
const PORT = 8080;

app.engine(
    "hbs",
    handlebars.create({
        extname: "hbs",
        helpers: {
            repeatContext,
        },
    }).engine
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// static files
app.use(express.static(path.join(__dirname, "public")));
app.use("/product", express.static(path.join(__dirname, "public")));
app.use("/cart", express.static(path.join(__dirname, "public")));

//
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

// logger
app.use(logger("dev"));

// router
router(app);

// listener
app.listen(PORT);
