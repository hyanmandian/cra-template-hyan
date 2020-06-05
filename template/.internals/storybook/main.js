const path = require("path");

module.exports = {
  stories: [path.resolve(__dirname, "..", "..", "src", "**", "stories.js")],
  addons: ["@storybook/preset-create-react-app"],
};
