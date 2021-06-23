module.exports = {
    css: {
        loaderOptions: {
            sass: {
              prependData: `
                @import "~@/assets/styles/_variables.scss";
                @import "node_modules/bootstrap/scss/functions";
                @import "node_modules/bootstrap/scss/variables";
                @import "node_modules/bootstrap/scss/mixins";
              `
            }
          }
    }
}