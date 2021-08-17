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
  it.each(cases)("renders $obfuscatedText", ({ component, text }) => {
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
    it("body", () => {
      const body = "You rock!";
      const { getByRole } = render(<Email email={fakeEmail} body={body} />);
      const link = getByRole("link");

      expect(link).not.toHaveAttribute(
        "href",
        expect.stringContaining(fakeEmail)
      );

      fireEvent.focus(link);

      expect(link).toHaveAttribute(
        "href",
        `mailto:${fakeEmail}?body=${encodeURIComponent(body)}`
      );
    });

    it("subject", () => {
      const subject = "Hi 👋";
      const { getByRole } = render(
        <Email email={fakeEmail} subject={subject} />
      );
      const link = getByRole("link");

      expect(link).not.toHaveAttribute(
        "href",
        expect.stringContaining(fakeEmail)
      );

      fireEvent.focus(link);

      expect(link).toHaveAttribute(
        "href",
        `mailto:${fakeEmail}?subject=${encodeURIComponent(subject)}`
      );
    });

    it("body and subject", () => {
      const body = "You rock!";
      const subject = "Hi 👋";
      const { getByRole } = render(
        <Email email={fakeEmail} body={body} subject={subject} />
      );
      const link = getByRole("link");

      expect(link).not.toHaveAttribute(
        "href",
        expect.stringContaining(fakeEmail)
      );

      fireEvent.focus(link);

      expect(link).toHaveAttribute(
        "href",
        `mailto:${fakeEmail}?body=${encodeURIComponent(
          body
        )}&subject=${encodeURIComponent(subject)}`
      );
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
