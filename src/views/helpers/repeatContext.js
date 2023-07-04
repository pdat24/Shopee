function repeatContext(time, options) {
    let res = "";
    for (var i = 0; i < time; i++) {
        res += options.fn(options.data.root.product) + "\n";
    }
    return res;
}

module.exports = repeatContext;
