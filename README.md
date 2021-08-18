# React Obfuscate Email

[![React Obfuscate Email](https://badgen.net/npm/v/react-obfuscate-email)](https://www.npmjs.com/package/react-obfuscate-email)
[![CI](https://github.com/MauricioRobayo/react-obfuscate-email/actions/workflows/main.yml/badge.svg)](https://github.com/MauricioRobayo/react-obfuscate-email/actions/workflows/main.yml)
[![codecov](https://codecov.io/gh/MauricioRobayo/react-obfuscate-email/branch/main/graph/badge.svg?token=gkrRmHZHGB)](https://codecov.io/gh/MauricioRobayo/react-obfuscate-email)
[![CodeFactor](https://www.codefactor.io/repository/github/mauriciorobayo/react-obfuscate-email/badge)](https://www.codefactor.io/repository/github/mauriciorobayo/react-obfuscate-email)
[![bundlephobia](https://badgen.net/bundlephobia/minzip/react-obfuscate-email)](https://bundlephobia.com/package/react-obfuscate-email)

📧🚫🤖 **Simple and lightweight email obfuscator React component**.

Until you hover or focus on the link, the `@` symbol is stripped out and rendered using `::after` css pseudo-element, and the `href` attribute value is replaced with `#`.

- No dependencies
- Tree-shakeable

Read the [documentation 📘](https://www.mauriciorobayo.com/react-obfuscate-email).

## Usage

```sh
npm install react-obfuscate-email --save
```

Import `Email` component:

```js
import { Email } from "react-obfuscate-email";
```

## Examples

```jsx
<Email email="test@example.com">📧 Email me!</Email>
```

Will render:

```html
<a href="#">📧 Email me!</a>
```

The `href` attribute is set to a `#` making it useless for email scraping bots.

Once the user interacts with it by hovering over it or focusing on it, it will properly set the `href` attribute:

```html
<a href="mailto:test@example.com">📧 Email me!</a>
```

If no children is given, it will use the email as the displayed text for the link:

```jsx
<Email email="test@example.com" />
```

In this case the '@' symbol is stripped out and is displayed using css `::after` pseudo-element, so the content of the link will actually be `testexample.com`, making it useless for bots:

```html
<a href="#">test<span class="roe"><span>example.com</a>
```

Once the user interacts with the element, it will be properly replaced with:

```html
<a href="mailto:test@example.com">test@example.com</a>
```

The component also accepts `body`, `subject`, `cc`, and `bcc` props that will be properly encoded for the link:

```jsx
<Email
  email="test@example.com"
  body="You rock!"
  subject="Hello 👋"
  cc={["cc1@example.com", "cc2@example.com"]}
  bcc={["bcc@example.com"]}
/>
```

Will properly produce `test@example.com?body=You%20rock!&subject=Hello%20%F0%9F%91%8B&cc=cc1%40example.com%2Ccc2%40example.com&bcc=bcc%40example.com` as the `href` attribute once human interaction is detected (notice spaces are percent encoded instead of being replaced with '+').

You can also include the `_target` attribute (or any other `a` tag attribute):

```jsx
<Email
  email="test@example.com"
  body="You rock!"
  subject="Hello 👋"
  title="Email me!"
  target="_blank"
  rel="noopener noreferrer"
>
  📧 Email me!
</Email>
```

Will render:

```html
<a href="#" title="Email me!" target="_blank" rel="noopener noreferrer"
  >📧 Email me!</a
>
```

The `href` attribute will be properly replaced once human interaction is detected.

## TypeScript

The component is written in TypeScript and type definitions are included.

## LICENSE

[MIT](LICENSE)
