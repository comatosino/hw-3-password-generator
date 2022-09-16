import path from 'path';
import CleanPlugin from 'clean-webpack-plugin';

const config = {
  mode: 'production',
  devtool: 'none',
  entry: '/src',
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};

export default config;
