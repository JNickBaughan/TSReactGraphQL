var path = require("path");
const { isBundle } = require("typescript");

module.exports = {
    mode: "development",
    entry: "./src/index",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [ ".ts", ".tsx", ".js", ".json" ]
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}