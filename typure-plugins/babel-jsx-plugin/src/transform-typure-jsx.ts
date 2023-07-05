import { NodePath, types as t } from "@babel/core"
import type { State } from "./types"

const transformJSXElement = (
  path: NodePath<t.JSXElement>,
  state: State
): t.CallExpression => {
  const openingElement = path.get("openingElement") as NodePath<t.JSXOpeningElement>;
  const closingElement = path.get("closingElement") as NodePath<t.JSXClosingElement>;
  const children = path.get("children");

  let tag = openingElement.node.name;
  let attributes = openingElement.node.attributes;

  if (t.isJSXClosingElement(closingElement.node)) {
    const closingTagName = closingElement.node.name;
    const tagIdentifier = t.isJSXMemberExpression(tag) ? tag.property : tag;

    if (
      (t.isJSXIdentifier(tagIdentifier) && t.isJSXIdentifier(closingTagName) && tagIdentifier.name !== closingTagName.name) ||
      (t.isJSXMemberExpression(tag) && !t.isJSXIdentifier(tag.property))
    ) {
      const tagName = (tagIdentifier as t.Identifier | t.JSXIdentifier).name;
      const closingTagNameValue = (closingTagName as t.JSXIdentifier).name;
      throw new Error(
        `Expected closing tag </${tagName}>, but got </${closingTagNameValue}>`
      );
    }
  }

  let props: t.ObjectProperty[] = [];
  let childrenNodes: t.Expression[] = [];

  if (attributes.length > 0) {
    attributes.forEach((attribute) => {
      if (t.isJSXAttribute(attribute)) {
        const attributeName = attribute.name;
        const attributeValue = attribute.value;

        const propName = t.isJSXIdentifier(attributeName)
          ? t.identifier(attributeName.name)
          : t.isJSXNamespacedName(attributeName)
            ? t.stringLiteral(`${attributeName.namespace.name}:${attributeName.name.name}`)
            : t.stringLiteral('');
        const propValue = t.isJSXExpressionContainer(attributeValue)
          ? attributeValue.expression
          : t.isJSXEmptyExpression(attributeValue)
            ? t.nullLiteral()
            : attributeValue || t.booleanLiteral(true);

        props.push(t.objectProperty(propName, (propValue as any), false, true));
      }
    });
  }

  if (children.length > 0) {
    children.forEach((child) => {
      if (t.isJSXText(child.node)) {
        const text = child.node.value.trim();
        if (text) {
          childrenNodes.push(t.stringLiteral(text));
        }
      } else if (t.isJSXExpressionContainer(child.node)) {
        if (!t.isJSXEmptyExpression(child.node.expression)) {
          childrenNodes.push(child.node.expression);
        }
      } else if (t.isJSXSpreadChild(child.node)) {
        childrenNodes.push(child.node.expression);
      } else {
        childrenNodes.push(child.node);
      }
    });
  }

  const createElement = t.identifier(state.createElementIdentifier);
  const tagExpr = t.isJSXMemberExpression(tag) ? tag : t.stringLiteral(tag.name as string);

  const propsExpr = props.length > 0 ? t.objectExpression(props) : t.nullLiteral();
  const childrenExpr = childrenNodes.length > 0 ? t.arrayExpression(childrenNodes) : t.nullLiteral();

  return t.callExpression(createElement, [tagExpr as t.Expression, propsExpr, childrenExpr]);

};

export default ({
  JSXElement: {
    exit(path: NodePath<t.JSXElement>, state: State) {
      path.replaceWith(transformJSXElement(path, state));
    },
  },
});