import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "dark",
    brandTitle: "React Obfuscate Email",
    brandUrl: "https://github.com/MauricioRobayo/react-obfuscate-email",
  }),
});
