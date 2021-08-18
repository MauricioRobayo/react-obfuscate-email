# React Obfuscate Email

[![React Obfuscate Email](https://badgen.net/npm/v/react-obfuscate-email)](https://www.npmjs.com/package/react-obfuscate-email)
[![CI](https://github.com/MauricioRobayo/react-obfuscate-email/actions/workflows/main.yml/badge.svg)](https://github.com/MauricioRobayo/react-obfuscate-email/actions/workflows/main.yml)
[![codecov](https://codecov.io/gh/MauricioRobayo/react-obfuscate-email/branch/main/graph/badge.svg?token=gkrRmHZHGB)](https://codecov.io/gh/MauricioRobayo/react-obfuscate-email)
[![CodeFactor](https://www.codefactor.io/repository/github/mauriciorobayo/react-obfuscate-email/badge)](https://www.codefactor.io/repository/github/mauriciorobayo/react-obfuscate-email)
[![bundlephobia](https://badgen.net/bundlephobia/minzip/react-obfuscate-email)](https://bundlephobia.com/package/react-obfuscate-email)

📧🚫🤖 **A lightweight email obfuscator React component**.

Until you hover or focus on the link, the `@` symbol is stripped out and rendered using `::after` css pseudo-element, and the `href` attribute value is replaced with `#`.

- No dependencies
- Tree-shakeable

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

Read the [documentation 📘](https://www.mauriciorobayo.com/react-obfuscate-email?nav=false).

## TypeScript

The component is written in TypeScript and type definitions are included.

## Contributing

All type of contributions are welcome!

## Show your support

Give a ⭐️ if you like this project!

## LICENSE

[MIT](LICENSE)
