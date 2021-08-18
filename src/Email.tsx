import React, {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  useState,
} from "react";
import { percentEncodeParams } from "./utils";

function obfuscateEmail(email: string): JSX.Element {
  const [username, domain] = email.split("@");
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          a>span.roe::after {
            content: "@";
          }
        `,
        }}
      />
      {username}
      <span className="roe" />
      {domain}
    </>
  );
}

type Props = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  bcc: string[];
  body?: string;
  cc: string[];
  children?: ReactNode;
  className?: string;
  email: string;
  subject?: string;
};
export function Email({
  bcc = [],
  body = "",
  cc = [],
  children,
  email,
  subject = "",
  ...rest
}: Props): JSX.Element {
  const [hovered, setHovered] = useState(false);
  const emailUrl = new URL(`mailto:${email}`);

  // https://github.com/whatwg/url/issues/18#issuecomment-369865339
  emailUrl.search = percentEncodeParams({ bcc, body, cc, subject });

  function handleHover() {
    setHovered(true);
  }

  const displayText = children || email;
  const obfuscatedText = children || obfuscateEmail(email);

  return (
    <a
      href={hovered ? emailUrl.href : "#"}
      onFocus={handleHover}
      onMouseOver={handleHover}
      {...rest}
    >
      {hovered ? displayText : obfuscatedText}
    </a>
  );
}
