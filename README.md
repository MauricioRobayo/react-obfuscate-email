# React Obfuscate Email

[![CI](https://github.com/MauricioRobayo/react-obfuscate-email/actions/workflows/main.yml/badge.svg)](https://github.com/MauricioRobayo/react-obfuscate-email/actions/workflows/main.yml)
[![codecov](https://codecov.io/gh/MauricioRobayo/react-obfuscate-email/branch/main/graph/badge.svg?token=gkrRmHZHGB)](https://codecov.io/gh/MauricioRobayo/react-obfuscate-email)

📧 React component to obfuscate email links.

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

The `href` attribute is set to a `#` making it useless for bots scraping for emails.

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

The component also accepts `body` and `subject` props that will be properly encoded for the link:

```jsx
<Email email="test@example.com" body="You rock!" subject="Hello 👋" />
```

Will properly produce `test@example.com?body=You%20rock!&subject=Hello%20%F0%9F%91%8B` as the `href` attribute once human interaction is detected (notice spaces are percent encoded instead of being replaced with '+').

You can also include the `_target` attribute (or any other `a` attribute):

```jsx
<Email
  email="test@example.com"
  body="You rock!"
  subject="Hello 👋"
  title="Email me!"
  target="_blank"
  rel="noopener noreferrer"
>
  Email me!
</Email>
```

Will render:

```html
<a href="#" title="Email me!" target="_blank" rel="noopener noreferrer"
  >Email me!</a
>
```

The `href` attribute will be properly replaced once human interaction is detected.

## TypeScript

The component is written in TypeScript and type definitions are included.

## LICENSE

[MIT](LICENSE)
