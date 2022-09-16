import path from 'path';

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'public/',
    watchContentBase: true,
    hot: true,
    inline: true,
  },
  entry: '/src',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/dist',
    filename: 'bundle.js',
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
    extensions: ['.ts', '.js', 'html', 'css'],
  },
};

export default config;
