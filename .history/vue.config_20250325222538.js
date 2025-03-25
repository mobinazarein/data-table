const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/base.scss";`,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@fonts": path.resolve(__dirname, "src/assets/fonts"),
      },
    },
  },
  pluginOptions: {
    vuetify: {},
  },
});
