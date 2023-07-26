# Introduction

## What is Typure

Typure is a JavaScript framework for building user interfaces without the need for build-time or Virtual DOM. It's a lightweight and pure JavaScript framework that you can effortlessly import and utilize in your projects. Moreover, you have the freedom to integrate Typure into Vue or React if you prefer. So, come on, and embark on your coding journey with Typure!

Here is an example of Typure in action:

```html
<main-app />
```

```typescript
import { defineComponent, defineMethod } from "@typure/core";
import { state } from "@typure/reactive";

const App = defineComponent((context) => {
  let conunt = state<number>(0);

  defineMethod(context, "countAdd", () => {
    count.value++;
  });

  return `<button @click="countAdd">Count is: ${count.value}</button>`;
});

customElements.define("main-app", App);
```

### Result

<Demo />

This example demonstrates the two core features of Typure:

- **Reactivity**: When a reactive variable, created using the `state` api, is changed, Typure automatically updates the view.

- **Function Component**: In Typure, a component is function created using `defineComponent` api, which returns a JSX-like string to describe the DOM structure.

## The Pure JavaScript Framework

Typure is a framework powerd by the native components. which means typure it is natively supported by browsers. It eliminates the need for code building.making easy to use in various scenarios.Whether you are buililding a Vue application, another framework application,or even a simple HTML page, Typure is ready to be utilized.

If you have no experience with frameworks, some concepts may be difficute for you. But don't worry about it. Typure has fewer concepts than other frameworks making it a cost-effective and pratical choice for yout first experience.You can think of it as spliting your application into different JavaScritp file to hepls your application more orgnized and clear.

## Component Style

Typure provides two component styles: **Function Components** and **Class Components**.

The Function Component was demonstrated earlier, Here is an example of achiveing the same features using a Class Component:

```typescript
import { PureElement } from "@typure/core";
import { type State, state } from "@typure/reactive";

class App extends PureElement {
  count!: State<number>;

  constructor() {
    this.count = state<number>(1);
  }

  coundAdd() {
    this.count.value++;
  }

  render() {
    return `<button @click="countAdd">Count is: ${this.count.value}</button>`;
  }
}

customElements.define("main-app", App);
```

## Which To Choose

The both of `Function Components` and `Class Components` has the full feature of Typure.We suggest using Function Components style because it offers more flexbility for organizing your code. Howeveer, the Class Components style gennerally provides better perfomance as Function Components are achived by further encapsulation Class Components. So, using Class Components directly will yield betetr performace.

Nevertheless,the additional performance overhead is usuallu negligible. Ultimately, the choice of which component style to use depends more on your personal code style preferences.

## Still Got Question?

Pull an issue on [GitHub](https://github.com/wangyewei/typurejs/issues)

<FooterComp />

<Ads />

<script setup>
import Demo from './demo.vue'
</script>
