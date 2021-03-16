const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: "./src/basess.ts",
  mode: "production",
  output: {
    filename: "basess.js",
    library: {
      name: 'Basess',
      type: 'umd',
      auxiliaryComment:{
        root: 'Root Comment',
        commonjs: 'CommonJS Comment',
        commonjs2: 'CommonJS2 Comment',
        amd: 'AMD Comment'
      }
    },
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"],
        exclude: [path.resolve(__dirname, "node_modules")],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new OptimizeCssAssetsWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "basess.css",
    }),
  ],
};
