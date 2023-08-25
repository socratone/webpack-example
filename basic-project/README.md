# Basic Project

Basic Project를 띄워서 변경된 내용이 browser에 바로 반영되도록 한다.

## Dev Script

`npx webpack serve --mode development --open`

## Build Script

`npx webpack --config webpack.config.js --mode development`

## Tree Shaking

작동하려면 `production` mode여야 하고 ES 모듈이어야 한다.
