<p align="center"><img width="300" src="https://github.com/wangyewei/Typurejs/assets/49926816/945db725-282b-440e-9202-8bb715a12c63" /></p>

## What is Typure?

`typure.js` is a lightweight TypeScript library that is built on native web components for building user interfaces.

## Overview

`typure.js` uses a 'jsx-like' template string to render the Shadow DOM of the element. It also uses decorators to create responsive variables, implementing a javascript MVC framework with state-driven views.

```typescript
import { PureElement } from '@typure/core'
import { type State, state } from '@typure/reactive'
class MyElement extends PureElement {
  counter: State<number>

  constructor() {
    super()
    this.counter = state(0)
  }
  countAdd() {
    this.counter.value++
  }
  render() {
    return `
     <div>
      <h2 align="center">hello, this is typure.js</h2>
      <p align="center">
        <span>${this.counter.value}</span>
        <button @click="countAdd">count++</button>
      </p>
     </div>
    `
  }
}
export default MyElement
```

### FC

```typescript
import { defineComponent } from '@typure/core'
import { state } from '@typure/reactive'
export defineComponent(() => {
  const counter = state<number>(0)
  function countAdd() {
    counter.value++
  }
  return `
     <div>
      <h2 align="center">hello, this is typure.js</h2>
      <p align="center">
        <span>${counter.value}</span>
        <button @click="countAdd">count++</button>
      </p>
     </div>
    `
})
```

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2023-present, Yewei Wang
