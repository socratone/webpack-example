# Basic

build시 `mode` 를 `development` 로 하면 bundle.js의 주석을 보고 어떤 모듈이 포함되어 있는지 확인할 수 있다.

## Build Script

`webpack --config webpack.config.js --mode development`

## 확인 가능한 주석 예제

```
/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {
```

```
/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
```
