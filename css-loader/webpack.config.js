const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // 오른쪽에서부터 적용
        // css-loader는 css 파일을 불러오고 style-loader는 html head에 style로 넣는다.
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
