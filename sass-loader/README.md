# SASS Loader

`sass-loader` 를 앞에 넣어주면 된다.\
`rules` 에 두 가지를 넣어서 `.css` 와 `.scss` 를 불러올 수 있다.

```
module: {
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
  ],
},
```

## Build Script

`npx webpack --config webpack.config.js --mode development`
