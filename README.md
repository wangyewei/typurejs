<p align="center"><img width="300" src="https://github.com/wangyewei/Typurejs/assets/49926816/945db725-282b-440e-9202-8bb715a12c63" /></p>

## What is Typure?

Typure is a lightweight TypeScript library that focuses on native HTML development and componentization. it equips developers with essential tools and flexibility to create efficient, maintainable, and highly customizable web applications.

## How to use (current version)

```typescript
import { PureElement } from "@typure/core"

class MyElement extends PureElement {
  render(): string | HTMLElement {
    return `
    <p align="center">
      <h1 onclick="alert('Button clicked!')" align="center">
        hello, Typre.js
      </h1>
    </p>
  `
  }
}

globalThis.customElements.define("my-app", MyElement)
```

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2023-present, Yewei Wang
