import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

addons.setConfig({
  showNav: false,
  toolbar: {
    zoom: { hidden: true },
    eject: { hidden: true },
    fullscreen: { hidden: true },
  },
  theme: create({
    base: "light",
    brandTitle: "React Obfuscate Email",
    brandUrl: "https://github.com/MauricioRobayo/react-obfuscate-email",
  }),
});
