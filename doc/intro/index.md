# Introduction

## What is Typure

Typure is a javascript framework for builiding userinterface.

Here is an example:

```html
<App />
```

```typescript
import { PureElement } from '@typure'

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
    <button @click="countAdd">Count is: ${this.count}</button>
    `
  }
}
customElements.define('App', App)
```

## Function component

You can alse use Function Component like this:

```typescript
import { defineComponent } from '@typure'

export default defineComponent(() => {
  let conunt = 1
  return `<button @click="() => countAdd++">Count is: ${count}</button>`
})
```
