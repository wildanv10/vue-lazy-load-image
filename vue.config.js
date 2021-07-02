const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/dist/" : "/",
  configureWebpack: {
    output: {
      filename: "js/index.js",
    },
    entry: ["./src/main.js"],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            output: {
              comments: false,
            },
          },
        }),
      ],
    },
  },
  transpileDependencies: ["oidc-client"],
};
