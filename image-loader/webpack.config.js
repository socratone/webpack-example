const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // /dist/images 폴더에 두고 싶다면
    assetModuleFilename: 'images/[hash][ext]',
    // /dist에서 사용하지 않는 파일 삭제
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
      },
    ],
  },
};
