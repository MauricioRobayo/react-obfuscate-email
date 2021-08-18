module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false,
        backgrounds: false,
        viewport: false,
        toolbars: false,
      },
    },
  ],
};
