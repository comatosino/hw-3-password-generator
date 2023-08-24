import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

import CopyPlugin from "copy-webpack-plugin";

export default {
  mode: "production",
  entry: "./src/main.ts",
  output: {
    filename: "[name].js",
    path: resolve(dirname(fileURLToPath(import.meta.url)), "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/index.html" },
        { from: "src/styles.css" },
        { from: "src/favicon.ico" },
      ],
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
