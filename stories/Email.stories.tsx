import React from "react";
import { Meta } from "@storybook/react";
import { Email } from "../src";

const meta: Meta = {
  title: "Email",
  component: Email,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export const Simple = () => <Email email="test@example.com" />;

export const Children = () => (
  <Email email="test@example.com">
    <div>📧 Click here to email me!</div>
  </Email>
);

export const Params = () => (
  <Email email="test@example.com" subject="Hello, world!" body="You rock! 🚀">
    <div>📧 Click here to email me!</div>
  </Email>
);

export default meta;
