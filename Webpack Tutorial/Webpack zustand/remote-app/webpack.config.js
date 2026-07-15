const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    // publicPath: "http://localhost:3001/",
    publicPath: 'auto'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  devServer: {
    port: 3001, // remote app yahan chalega
    open: false,
    // headers: {
    //   "Access-Control-Allow-Origin": "*", // dusre origin (host-app, port 3000) ko allow karo
    // },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "remoteApp", // is dukaan ka naam
      filename: "remoteEntry.js", // ye file host ko batayegi kya kya milega
      exposes: {
        "./Todo": "./src/Todo.tsx", // sirf Button ko bahar bhej rahe hai
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.2.0" },
        "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
      },
    }),
  ],
};