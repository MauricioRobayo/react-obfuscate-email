# React Obfuscate Email

📧 React component to obfuscate email links

```
import { Email } from "react-obfuscate-email";

export default function SomeComponent() {
  return (
    <Email email="test@example.com">📧 Email me!</Email>
  )
}
```

If no children is given, it will use the email as the displayed text for the link.

It also accepts `body` and `subject` props that will be use on the link:

```
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

It uses `styled-components`, it should be installed on your project.
