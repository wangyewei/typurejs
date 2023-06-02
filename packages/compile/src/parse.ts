import type { PureElement } from "@typure/core"
export function parse(this: PureElement, renderContent: string): DocumentFragment {
  const parser = new DOMParser()
  const doc = parser.parseFromString(renderContent, 'text/html')
  const elements: HTMLCollection = doc.body.children

  const fragment = document.createDocumentFragment()
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i]
    const attrs = element.attributes

    for (let j = 0; j < attrs.length; j++) {
      const attr = attrs[j]
      if (attr.name.startsWith("@")) {
        const eventName = attr.name.slice(1);

        this.addEventListener(eventName, (this as Record<string, any>)[attr.value])
      }
    }
    fragment.appendChild(element.cloneNode(true))
  }

  return fragment
}