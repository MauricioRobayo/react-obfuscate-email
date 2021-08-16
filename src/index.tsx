import React, {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  useState,
} from 'react';
import { percentEncodeParams } from './utils';

export type Props = DetailedHTMLProps<
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

  return (
    <a
      className={className}
      href={hovered ? emailUrl.href : '#'}
      onFocus={handleHover}
      onMouseOver={handleHover}
      {...rest}
    >
      {hovered
        ? children || email
        : children ||
          email
            .split('@')
            .map((emailSegment) => (
              <span key={emailSegment}>{emailSegment}</span>
            ))}
    </a>
  );
}
