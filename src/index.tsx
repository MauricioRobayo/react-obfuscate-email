import React, {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  useState,
} from 'react';
import styled from 'styled-components';
import { percentEncodeParams } from './utils';

const Obfuscated = styled.span`
  &::after {
    content: '@';
  }
`;

function obfuscateEmail(email: string): JSX.Element {
  const [username, domain] = email.split('@');
  return (
    <>
      {username}
      <Obfuscated />
      {domain}
    </>
  );
}

type Props = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  body?: string;
  children?: ReactNode;
  className?: string;
  email: string;
  subject?: string;
};
export function Email({
  body = '',
  subject = '',
  children,
  className,
  email,
  ...rest
}: Props) {
  const [hovered, setHovered] = useState(false);
  const emailUrl = new URL(`mailto:${email}`);

  // https://github.com/whatwg/url/issues/18#issuecomment-369865339
  emailUrl.search = percentEncodeParams({ body, subject });

  function handleHover() {
    setHovered(true);
  }

  const displayText = children || email;
  const obfuscatedText = children || obfuscateEmail(email);

  return (
    <a
      className={className}
      href={hovered ? emailUrl.href : '#'}
      onFocus={handleHover}
      onMouseOver={handleHover}
      {...rest}
    >
      {hovered ? displayText : obfuscatedText}
    </a>
  );
}
