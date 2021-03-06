module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "stories": [
  "../../src/stories/*.stories.js",
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "storybook-builder-vite"
  }
}