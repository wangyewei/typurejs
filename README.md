<p align="center"><img width="300" src="https://github.com/wangyewei/Typurejs/assets/49926816/945db725-282b-440e-9202-8bb715a12c63" /></p>

## What is Typure?

`typure.js` is a lightweight typescript library for building user interfaces. Based on native web components. **Efficient**, **simple**, **flexible** and **no virtual DOM**, **no compile-time**.

## Overview

_Maybe we'll embrace functions next._

`typure.js` uses a 'jsx-like' template string to render the Shadow DOM of the element. It also uses decorators to create responsive variables, implementing a javascript MVC framework with state-driven views.

<!--
```typescript
import { PureElement, defineComponent } from "@typure/core"
import { state } from "@typre/reactive"

// This class defines the `typure-element`.
class AppElement extends PureElement {
  // This decorator is used to create a responsive state variable.
  // This can be used in pure-elemnt to trigger an update of the
  // corresponding view when the state changes.
  @state<string>()
  mood = "great"

  render(): string | HTMLElement {
    // Render element DOM by return a `jsx-like` template
    return `
    <p align="center">
      <input value="${this.mood}"
             placeholder="type your mood"
             @input="${(e) => (this.mood = e)}"
      />
      <h1 align="center">
        Hello, this is Typre.js.
        You seem to be in a ${this.mood} mood.
      </h1>
    </p>
  `
  }
}
// This function registers a `pure-element` that can be used directly
// in the html template.
defineComponent("app", AppElement)
``` -->

```typescript
// app.ts
import { PureElement } from "@typure/core"

class MyElement extends PureElement {
  count: number = 0

  constructor() {
    super()
  }
  countAdd() {
    this.count++
  }

  render() {
    return `
     <div>
      <h2 align="center">hello, this is typure.js</h2>
      <p align="center">
        <span>${this.count}</span>
        <button @click="countAdd">count++</button>
      </p>
     </div>
    `
  }
}
export default MyElement

// main.ts
import MyElement from "./app"

customElements.define("my-element", MyElement)
```

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2023-present, Yewei Wang
