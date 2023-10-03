const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = new CopyPlugin({
    patterns: [
        {
            from: path.resolve(__dirname, '../../src/assets/preload'),
            to: path.resolve(__dirname, "../../public/")
        },
    ],
})