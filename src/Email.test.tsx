import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Email } from "./index";

const fakeEmail = "test@example.com";
const displayText = "Email me!";

const events = [
  { name: "focus", trigger: fireEvent.focus },
  { name: "mouseOver", trigger: fireEvent.mouseOver },
];

const cases = [
  {
    component: <Email email={fakeEmail} />,
    text: fakeEmail,
  },
  {
    component: <Email email={fakeEmail}>{displayText}</Email>,
    text: displayText,
  },
];

describe.each(events)("obfuscate email until $name", ({ trigger }) => {
  it.each(cases)("renders $text", ({ component, text }) => {
    const { queryByText, getByRole, getByText } = render(component);
    const link = getByRole("link");

    expect(link).not.toHaveAttribute(
      "href",
      expect.stringContaining(fakeEmail)
    );
    expect(queryByText(fakeEmail)).not.toBeInTheDocument();

    trigger(link);

    expect(link).toHaveAttribute("href", `mailto:${fakeEmail}`);
    expect(getByText(text)).toBeInTheDocument();
  });

  describe("properly set query string", () => {
    const cases: [Record<string, string | string[]>, string][] = [
      [
        {
          body: "You rock!",
        },
        "body=You%20rock!",
      ],
      [
        {
          subject: "Hi 👋",
        },
        "subject=Hi%20%F0%9F%91%8B",
      ],
      [
        {
          body: "You rock!",
          subject: "Hi 👋",
        },
        "body=You%20rock!&subject=Hi%20%F0%9F%91%8B",
      ],
      [
        {
          cc: ["cc1@example.com", "cc2@example.com"],
          bcc: ["bcc@example.com"],
        },
        "bcc=bcc%40example.com&cc=cc1%40example.com%2Ccc2%40example.com",
      ],
    ];
    it.each(cases)("should add %p as %s", (query, expected) => {
      const { getByRole } = render(<Email email={fakeEmail} {...query} />);
      const link = getByRole("link");

      expect(link).not.toHaveAttribute(
        "href",
        expect.stringContaining(fakeEmail)
      );

      fireEvent.focus(link);

      expect(link).toHaveAttribute("href", `mailto:${fakeEmail}?${expected}`);
    });
  });

  describe("properly set attributes", () => {
    const attributes = [
      {
        name: "title",
        value: "Email me!",
      },
      {
        name: "target",
        value: "_blank",
      },
      {
        name: "rel",
        value: "noreferrer noopener",
      },
    ];
    it.each(attributes)("$name", ({ name, value }) => {
      const { getByRole } = render(
        <Email email={fakeEmail} {...{ [name]: value }} />
      );
      const link = getByRole("link");

      expect(link).not.toHaveAttribute(
        "href",
        expect.stringContaining(fakeEmail)
      );
      expect(link).toHaveAttribute(name, value);

      fireEvent.focus(link);

      expect(link).toHaveAttribute("href", `mailto:${fakeEmail}`);
      expect(link).toHaveAttribute(name, value);
    });
  });
});
