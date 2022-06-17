const HtmlWebpackPlugin = require("html-webpack-plugin");

const { join } = require("path");
module.exports = {
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
  plugins: [new HtmlWebpackPlugin({
    template:join(__dirname,'public/index.html')
  })],
};
