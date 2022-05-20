const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    output: {
      libraryTarget: "system",
      filename: "js/app.js",
    },
  },
});
