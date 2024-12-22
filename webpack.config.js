const path = require("path");

module.exports = {
  entry: "./ArrayBufferConverter.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
};
