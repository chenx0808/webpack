const HtmlWebpackPlugin = require("html-webpack-plugin");

const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { join } = require("path");
module.exports = {
  mode: "development",
  // 指定入口，相对路径
  entry: "./src/main.js",
  //指定出口
  output: {
    // 输出的目录， 绝对路径的 lib
    path: join(__dirname, "lib"),
    // 输出的文件名 webpack-demo.js
    filename: "webpack-demo.js",
    // 删除上次的文件夹再打包
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, "public/index.html"),
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    open: true,
    port: 888,
  },
  module: {
    rules: [
     
      {
        test: /\.less/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|gif)/i,
        type: "asset",
        generator: {
          filename: "images/[hash:6][ext]",
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woof2)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash:6][ext]",
        },
      },
      {
        test: /\.js$/i,
        use: ["babel-loader"],
      },
      {
        test: /\.vue$/i,
        loader: "vue-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
