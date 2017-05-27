module.exports = {
  entry: "./public/App.js",
  output: {
      path: __dirname + "/public",
      filename: "bundle.js"
  },
  module: {
      loaders: [
        {
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-decorators-legacy', 'transform-class-properties']
            }
        }
      ]
  },
  watch: true

}
