
export const processElement = (element: Element): Node => {


  const clonedElement = element.cloneNode(true)

  clonedElement.addEventListener('click', () => {
    console.log('ok')
  })

  for (let i = 0; i < element.children.length; i++) {
    const child = element.children[i];
    const clonedChild = processElement(child)
    clonedElement.appendChild(clonedChild);
  }
  return clonedElement
}

export const createElement = (elements: HTMLCollection): DocumentFragment => {
  const root = document.createDocumentFragment()

  Array.from(elements).forEach(element => {
    root.appendChild(processElement(element))
  })

  return root

}

export const parseElement = (templateHTMLstr: string): HTMLCollection => {
  const parser = new DOMParser()
  return parser.parseFromString(templateHTMLstr, 'text/html').body.children
}

export const parse = (templateHTMLstr: string): DocumentFragment => {
  return createElement(parseElement(templateHTMLstr))
}
