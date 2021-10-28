const {override, addWebpackPlugin, setWebpackOptimizationSplitChunks,  } = require('customize-cra')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const isProductionEnv = () => {
  return process.env.NODE_ENV === 'production'
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
  })
)
