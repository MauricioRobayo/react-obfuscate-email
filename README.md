# React Obfuscate Email

[![React Obfuscate Email](https://badgen.net/npm/v/react-obfuscate-email)](https://www.npmjs.com/package/react-obfuscate-email)

📧🚫🤖 **Lightweight email obfuscator React component**.

Until you hover or focus on the link, the `@` symbol is stripped out and rendered using `::after` css pseudo-element, and the `href` attribute value is replaced with `#`.

## Installation

```sh
npm install --save react-obfuscate-email
```

## Usage

```js
import { Email } from "react-obfuscate-email";

export default function SomeComponent() {
  return <Email email="test@example.com">📧 Email me!</Email>;
}
```

## Examples

Inspect the element without hovering or focusing on it to see what's actually rendered:

```jsx
<Email
  email="cick@me.com"
  body="You rock!"
  subject="Hi 👋"
  cc={["cc1@example.com", "cc2@example.com"]}
  bcc={["bcc@example.com"]}
>
  📧 Click me!
</Email>
```

You can pass any `children` to control the displayed text of the link:

```jsx
<Email email="cick@me.com">📧 Click me!</Email>
```

You can pass any valid `a` tag attributes, like `target` or `title`:

```jsx
<Email
  email="cick@me.com"
  title="📧 Email me!"
  target="_blank"
  rel="noopener noreferrer"
>
  📧 Email me!
</Email>
```

## Props

| Name     | Type                                    | Required | Default | Description                                           |
| -------- | --------------------------------------- | -------- | ------- | ----------------------------------------------------- |
| email    | string                                  | Yes      | —       | E-mail recipient address                              |
| children | ReactNode                               | No       | email   | Content to display in the link                        |
| subject  | string                                  | No       | ""      | Subject of e-mail                                     |
| body     | string                                  | No       | ""      | Body of e-mail                                        |
| cc       | string[]                                | No       | []      | Carbon copy e-mail addresses                          |
| bcc      | string[]                                | No       | []      | Blind carbon copy e-mail addresses                    |
| ...props | AnchorHTMLAttributes<HTMLAnchorElement> | No       | —       | Any valid <a> tag attribute (e.g. target, rel, title) |

## TypeScript

The component is written in TypeScript and type definitions are included.

## License

[MIT](https://github.com/MauricioRobayo/react-obfuscate-email/blob/main/LICENSE)

## Show your support

Give a ⭐️ if you like this project!

## LICENSE

[MIT](LICENSE)
