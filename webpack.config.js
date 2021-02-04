const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    library: 'vuex-orm-crud-ui',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      { // vuejs
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          cacheBusting: true,
        }
      },
      { // js
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
