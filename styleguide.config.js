module.exports = {
  components: ["src/components/**/[A-Z]*.{js,jsx}", "src/hooks/**.{js, ts}"],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /.\.md$/, // look for .md files in component folder
          type: "javascript/auto", // Tell webpack to interpret the result from examples-loader as JavaScript
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  },
};
