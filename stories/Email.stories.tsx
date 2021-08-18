import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Email } from "../src/Email";

export default {
  title: "React Obfuscate Email",
  component: Email,
  args: {
    email: "test@example.com",
  },
} as ComponentMeta<typeof Email>;

const Template: ComponentStory<typeof Email> = (args) => <Email {...args} />;

export const Default = Template.bind({});
Default.args = {
  body: "You rock!",
  subject: "Hi 👋",
  cc: ["cc1@example.com", "cc2@example.com"],
  bcc: ["bcc@example.com"],
};

export const Simple = Template.bind({});
Simple.args = {};

export const Children = Template.bind({});
Children.args = {
  children: "📧 Email me!",
};

export const Attributes = Template.bind({});
Attributes.args = {
  title: "📧 Email me!",
  rel: "noreferrer noopener",
  target: "_blank",
};
