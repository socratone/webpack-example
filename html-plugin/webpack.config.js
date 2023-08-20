const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    first: './src/first.js',
    second: './src/second.js',
  },
  output: {
    filename: '[name].bundle.js', // => first.bundle.js, second.bundle.js
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    // dist에 추가적으로 html 파일을 만들어주는 플러그인
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/first.html'), // html을 생성할 때 재료로 삼을 .html 파일 경로
      chunks: ['first'], // entry의 'first'에 해당하는 .js 파일을 bundle로 사용
      inject: 'body', // 'body'를 넣으면 모든 javascript resource는 body의 제일 끝에 위치하게 된다.
      filename: 'first.html', // 'first.html'라는 이름으로 파일 생성
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/second.html'),
      chunks: ['second'],
      inject: 'body',
      filename: 'second.html',
    }),
  ],
};
