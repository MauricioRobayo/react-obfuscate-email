# React Obfuscate Email

📧 React component to obfuscate email links

```jsx
import { Email } from 'react-obfuscate-email';

export default function SomeComponent() {
  return <Email email="test@example.com">📧 Email me!</Email>;
}
```

Will render:

```html
<a href="#">📧 Email me!</a>
```

Making it useless for bots scraping for emails.

When the user hovers over it or focus on it, it will change to:

```html
<a href="test@example.com">📧 Email me!</a>
```

If no children is given, it will use the email as the displayed text for the link:

```jsx
import { Email } from "react-obfuscate-email";

export default function SomeComponent() {
  return <Email email="test@example.com" />";
}
```

Will render:

```html
<a href="#">testexample.com</a>
```

The '@' symbol is stripped out and is displayed using css `::after` pseudo-element.

Once the user interacts with the element, it will be properly set to the email link:

```html
<a href="test@example.com">test@example.com</a>
```

The component also accepts `body` and `subject` props that will be use on the link:

```jsx
import { Email } from "react-obfuscate-email";

export default function SomeComponent() {
  return (
    <Email
      email="test@example.com"
      body="You rock! 🚀"
      subject="Hello, world! 👋'
    />
  )
}
```

You can also set the `_target` property (or any other `a` attribute):

```jsx
import { Email } from 'react-obfuscate-email';

export default function SomeComponent() {
  return (
    <Email
      email="test@example.com"
      body="You rock! 🚀"
      subject="Hello, world! 👋"
      title="Email me"
      target="_blank"
      rel="noopener noreferrer"
    />
  );
}
```

**It uses `styled-components`, it should be installed on your project.**

## LICENSE

[MIT](LICENSE)
