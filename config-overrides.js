const {override, addWebpackPlugin, setWebpackOptimizationSplitChunks, fixBabelImports,addWebpackAlias} = require('customize-cra')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

const isProductionEnv = () => {
  return process.env.NODE_ENV === 'production'
}
const addCompression = () => config => {
  if (isProductionEnv) {
    config.plugins.push(
      // gzip压缩
      new CompressionWebpackPlugin({
        test: /\.(css|js|webp|svg)$/,
        // 只处理比1kb大的资源
        threshold: 1024,
        // 只处理压缩率低于90%的文件
        minRatio: 0.9
      })
    )
  }

  return config
}

// 查看打包后各包大小
const addAnalyzer = () => config => {
  if (process.env.ANALYZER) {
    config.plugins.push(new BundleAnalyzerPlugin())
  }

  return config
}

module.exports = override(
  isProductionEnv() && addWebpackPlugin(
  new ProgressBarPlugin()
  ),
  isProductionEnv() && addWebpackPlugin(
  new UglifyJsPlugin({
    // 开启打包缓存
    cache: true,
    // 开启多线程打包
    parallel: true,
    uglifyOptions: {
      // 删除警告
      warnings: false,
      // 压缩
      compress: {
        // 移除console
        drop_console: true,
        // 移除debugger
        drop_debugger: true
      }
    }
  })),
  isProductionEnv() && addWebpackPlugin(
  new HardSourceWebpackPlugin()
  ),
  isProductionEnv() && setWebpackOptimizationSplitChunks({
    minSize: 10000,
    maxSize: 250000,
  }),
  // 针对antd 实现按需打包：根据import来打包 (使用babel-plugin-import)
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true, //自动打包相关的样式 默认为 style:'css'
  }),
  // //配置alias别名
  // addWebpackAlias({
  //   crypto: false,
  //   'react/jsx-runtime': require.resolve('react/jsx-runtime'),
  // })
  //添加压缩图片
  // addCompression(),
  // addAnalyzer()
)
