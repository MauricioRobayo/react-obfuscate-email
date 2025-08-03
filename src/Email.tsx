"use client";

import {
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

export interface EmailProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  /** blind carbon copy e-mail addresses */
  bcc?: string[];
  /** body of e-mail */
  body?: string;
  /** carbon copy e-mail addresses */
  cc?: string[];
  children?: ReactNode;
  /** e-mail recipient address */
  email: string;
  /** subject of e-mail */
  subject?: string;
}
export function Email({
  bcc = [],
  body = "",
  cc = [],
  children,
  email,
  subject = "",
  ...props
}: EmailProps): JSX.Element {
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
      {...props}
    >
      {hovered ? displayText : obfuscatedText}
    </a>
  );
}
