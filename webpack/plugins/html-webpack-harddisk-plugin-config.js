const HtmlWebpackHarddiskPluginConfig = require('html-webpack-harddisk-plugin');
const path = require("path");

module.exports = new HtmlWebpackHarddiskPluginConfig({
    outputPath: path.resolve(__dirname, '../../public')
});