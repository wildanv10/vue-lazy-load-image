const { BannerPlugin } = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

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
    plugins: [new BundleAnalyzerPlugin(), new BannerPlugin("wildanv10 \n")],
  },
  transpileDependencies: ["oidc-client"],
};
