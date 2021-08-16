# React Obfuscate Email

📧 React component to obfuscate email links.

## Usage

```sh
npm i react-obfuscate-email
```

Import `Email` named component:

```js
import { Email } from 'react-obfuscate-email';
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
<a href="test@example.com">📧 Email me!</a>
```

If no children is given, it will use the email as the displayed text for the link:

```jsx
<Email email="test@example.com" />"
```

In this case the '@' symbol is stripped out and is displayed using css `::after` pseudo-element:

```html
<a href="#">testexample.com</a>
```

Once the user interacts with the element, it will be properly set:

```html
<a href="test@example.com">test@example.com</a>
```

The component also accepts `body` and `subject` props that will be properly encoded for the link:

```jsx
<Email
  email="test@example.com"
  body="You rock! 🚀"
  subject="Hello, world! 👋"
/>
```

Will render (notice spaces are percent encoded instead of being replaced with '+'):

```html
<a
  href="test@example.com?body=You%20rock!%20%F0%9F%9A%80&subject=Hello%2C%20world!%20%F0%9F%91%8B"
  >test@example.com</a
>
```

You can also include the `_target` attribute (or any other `a` attribute):

```jsx
<Email
  email="test@example.com"
  body="You rock! 🚀"
  subject="Hello, world! 👋"
  title="Email me"
  target="_blank"
  rel="noopener noreferrer"
/>
```

## TypeScript

The component is written in TypeScript and type definitions are included.

## Peer Dependencies

- [React >= 16](https://reactjs.org/)
- [styled components >= 5](https://styled-components.com/)

## LICENSE

[MIT](LICENSE)
