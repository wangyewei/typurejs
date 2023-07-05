import { PureElement } from "@typure/core"

function state(initialValue: any) {
  return function (target: any, propertyKey: string) {
    let value = initialValue;

    const getter = () => value;

    const setter = (newValue: any) => {
      value = newValue;
      target.render();
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  };
}
class MyElement extends PureElement {
  @state(0)
  count;

  constructor() {
    super()
    this.count = 1
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