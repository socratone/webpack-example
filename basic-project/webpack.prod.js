const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { PurgeCSSPlugin: PurgeCssPlugin } = require('purgecss-webpack-plugin');
const glob = require('glob');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const PATHS = {
  src: path.join(__dirname, 'src'),
};

module.exports = merge(commonConfig, {
  mode: 'production',
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
    new MiniCssExtractPlugin(),
    // 사용하지 않는 css class를 제거해준다.
    new PurgeCssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
  ],
});
