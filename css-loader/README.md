# CSS Loader

css-loader와 style-loader를 사용하면 `bundle.js` 에 import로 불러온 `.css` 파일을 포함시키고\
`bundle.js` 를 불러오는 `index.html` head의 style로 들어가게 한다.

## Build Script

`npx webpack --config webpack.config.js --mode development`

## 확인 가능한 주석 예제

`dist/bundle.js` 중에서

```
/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {
```
