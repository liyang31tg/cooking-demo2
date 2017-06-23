var path = require('path');
var cooking = require('cooking');
var build = require('./build');

cooking.set({
  entry: build.entries(),
  dist: 'dist',
  template: build.templates(),

  devServer: {
    port: 8081,
    publicPath: '/'
  },

  // production
  clean: true,
  hash: true,
  // sourceMap: true,
  minimize: true,
  chunk: true, // see https://cookingjs.github.io/zh-cn/configuration.html#chunk
  postcss: [
    // require('...')
  ],
  publicPath: '/', //这里不写刚刚好，因为在定义名字的时候在前面加了一个static
  // assetsPath: 'static',
  urlLoaderLimit: 10000,
  static: true,//就是会拷贝当前static目录到dist目录下面
  extractCSS: 'publishStatic/[name].[contenthash:7].css',
  alias: {
    'src': path.join(__dirname, 'src')
  },
  extends: ['vue2', 'buble', 'sass', 'autoprefixer'],
  externals: build.externals()
});

cooking.add('output.filename', 'publishStatic/[name].[hash:7].js')

module.exports = cooking.resolve();
