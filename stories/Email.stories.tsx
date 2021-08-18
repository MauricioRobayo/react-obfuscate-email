import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Email } from "../src/Email";

export default {
  title: "React Obfuscate Email",
  component: Email,
  description: "test description",
  args: {
    email: "test@example.com",
  },
  argTypes: {
    email: {
      table: {
        category: "Required",
      },
    },
    subject: {
      table: {
        category: "Optional",
      },
    },
    body: {
      table: {
        category: "Optional",
      },
    },
    cc: {
      table: {
        category: "Optional",
      },
    },
    bcc: {
      table: {
        category: "Optional",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
📧🚫🤖 **Simple and lightweight email obfuscator React component**.

View on [GitHub](https://github.com/MauricioRobayo/react-obfuscate-email).

Until you hover or focus on the link, the \`@\` symbol is stripped out and rendered using \`::after\` css pseudo-element, and the \`href\` attribute value is replaced with \`#\`.
`,
      },
    },
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
