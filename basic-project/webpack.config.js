const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { PurgeCSSPlugin: PurgeCssPlugin } = require('purgecss-webpack-plugin');
const glob = require('glob');

const PATHS = {
  src: path.join(__dirname, 'src'),
};

module.exports = {
  entry: {
    index: './src/index.js',
    about: './src/pages/about.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'), // devServer가 바라보는 경로
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // style-loader 대신 MiniCssExtractPlugin을 사용하면 css-loader로 불러온 code를 .css 파일로 만든다.
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    // dist에 추가적으로 html 파일을 만들어주는 플러그인
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'), // html을 생성할 때 재료로 삼을 .html 파일 경로
      chunks: ['index'], // entry의 'index'에 해당하는 .js 파일을 bundle로 사용
      inject: 'body', // 'body'를 넣으면 모든 javascript resource는 body의 제일 끝에 위치하게 된다.
      filename: 'index.html', // 'index.html'라는 이름으로 파일 생성
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/pages/about.html'),
      chunks: ['about'],
      inject: 'body',
      filename: 'about.html',
    }),
    new MiniCssExtractPlugin(),
    // 사용하지 않는 css class를 제거해준다.
    new PurgeCssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
  ],
};
