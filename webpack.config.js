module.exports = {
    entry: {
        homeScript: "./src/public/js/homeScript/index.js",
        productScript: "./src/public/js/productScript/index.js",
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/src/public/js/dist",
    },
    mode: "development",
};
