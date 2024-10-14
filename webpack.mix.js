let mix = require("laravel-mix");
const path = require("path");

mix
  .js("resources/js/main.jsx", "public/js/app.js")
  .react()
  .postCss("resources/css/main.css", "public/css/app.css", [
    require("tailwindcss"),
  ])
  .disableNotifications();

mix.webpackConfig({
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "~": path.join(__dirname, "./resources/js"),
    },
  },
});
