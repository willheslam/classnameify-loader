# classnameify-loader
A Webpack Loader for Classnameify

## Usage

[Using loaders](http://webpack.github.io/docs/using-loaders.html)
[Classnameify](https://www.npmjs.com/package/classnameify)

Example loader config:

``` javascript
{ 
	test: /\.css.js$/,
	loader: 'style-loader!css-loader!unistyle-loader!classnameify-loader!babel-loader'
}
```

Or inline:

``` javascript
require("style!css!unistyle!classnameify!babel!./file.css.js")
```