import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Email } from "../src/index";

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
    obfuscatedText: fakeEmail.replace("@", ""),
  },
  {
    component: <Email email={fakeEmail}>{displayText}</Email>,
    text: displayText,
    obfuscatedText: displayText,
  },
];

describe.each(events)("obfuscate email until $name", ({ trigger }) => {
  it.each(cases)(
    "renders $obfuscatedText",
    ({ component, text, obfuscatedText }) => {
      const { queryByText, getByRole, getByText } = render(component);
      const link = getByRole("link");

      expect(link).not.toHaveAttribute(
        "href",
        expect.stringContaining(fakeEmail)
      );
      expect(queryByText(fakeEmail)).not.toBeInTheDocument();
      expect(getByText(obfuscatedText)).toBeInTheDocument();

      trigger(link);

      expect(link).toHaveAttribute("href", `mailto:${fakeEmail}`);
      expect(getByText(text)).toBeInTheDocument();
    }
  );
});

describe("properly set query string", () => {
  it("adds body", () => {
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

  it("adds subject", () => {
    const subject = "Hi 👋";
    const { getByRole } = render(<Email email={fakeEmail} subject={subject} />);
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

  it("adds body and subject", () => {
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
