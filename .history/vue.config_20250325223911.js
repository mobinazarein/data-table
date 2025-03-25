const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/styles/_fonts.scss"; 
          @import "@/assets/styles/base.scss";
        `,
      },
    },
  },
  pluginOptions: {
    vuetify: {},
  },
});
