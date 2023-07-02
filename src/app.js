const express = require("express");
const handlebars = require("express-handlebars");
const logger = require("morgan");
const path = require("path");
const router = require("./routers");

const app = express();
const PORT = 8080;

app.engine(
    "hbs",
    handlebars.create({
        extname: "hbs",
    }).engine
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// static files
app.use(express.static(path.join(__dirname, "public")));
app.use("/product", express.static(path.join(__dirname, "public")));

// logger
app.use(logger("dev"));

// router
router(app);

// listener
app.listen(PORT);
