const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8090,
    host: '0.0.0.0',
    https: false,
    open: true
}
})
