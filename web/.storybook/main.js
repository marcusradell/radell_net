// Setup by following the guide: https://gist.github.com/shilman/bc9cbedb2a7efb5ec6710337cbd20c0c
// I had to tweak it a bit though by adding presets.js content here in main.js.

const path = require("path");

module.exports = {
  stories: ["../src/stories/**/*.stories.(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register"
  ],
  presets: [
    {
      name: "@storybook/preset-create-react-app",
      options: {
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, "../tsconfig.json")
        }
      }
    },
    {
      name: "@storybook/addon-docs/preset",
      options: {
        configureJSX: true
      }
    }
  ]
};
