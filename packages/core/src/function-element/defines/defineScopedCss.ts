import type { PureElement } from "../../element"

export async function defineScopedCss(
  context: PureElement,
  style: Promise<{ default: string }>
) {

  const sheet = new CSSStyleSheet()
  sheet.replaceSync((await style).default)

  context.shadowRoot.adoptedStyleSheets = [sheet]
}
