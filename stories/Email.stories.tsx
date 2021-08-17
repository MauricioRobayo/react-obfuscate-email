import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Email } from "../src/Email";

export default {
  title: "Examples",
  component: Email,
  args: {
    email: "test@example.com",
  },
} as ComponentMeta<typeof Email>;

const Template: ComponentStory<typeof Email> = (args) => <Email {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Body = Template.bind({});
Body.args = {
  body: "You rock!",
};

export const Subject = Template.bind({});
Subject.args = {
  subject: "Hi 👋",
};

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
