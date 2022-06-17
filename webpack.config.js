//webpack-dev-server

//平时写代码
// 安装 yarn add webpack-dev-server -D
// scripts:'"server": "webpack server"'
// yarn server
// 1:内存打包
// 2：开启服务器
// 3：打包后的文件直接部署在文件夹上

const HtmlWebpackPlugin = require("html-webpack-plugin");

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
  ],
  devServer: {
    open: true,
    port: 888,
  },
};
