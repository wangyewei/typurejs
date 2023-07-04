/**
 * @author Yewei Wang
 * @license MIT
 * @copyright 2023-preset Yewei Wang
 */
/**
 * The core class that manages component state and properties. When the
 * state changes, the 'update' function is called to update the user inerface.
 */
export declare class PureElement extends HTMLElement {
    shadowRoot: ShadowRoot;
    constructor();
    /**
     * The jsx-like template string returned in render implemented by the subclass is
     * mounted when called.
     * Expected features:
     * [x] implements the h function to handle the pure-element syntax that is unique
     * in jsx-like while this is hanging in render.
     * [x] completes the construction of responsive variable
     */
    connectedCallback(): void;
    /**
     * Binds event listeners to the given element and its descendants
     * based on the attributes starting with `@`
     * When an attribute starts with `@`, it is treated as an event binding
     * attribute.
     * The eventhandler function is expected to be method
     * defined in the current class.
     */
    bindEvent(element: Element | DocumentFragment): Element | DocumentFragment;
    /**
     * Adds the render content of the element to the Shadow DOM. It first
     * take the rendered content and the handles it diffrently depending on the
     * type of content.
     */
    renderElement(): void;
    /**
     * Update the current element, creating shadowRoot if it is the first update.
     * xpected features:
     * [x] reactive element
     */
    update(fn?: () => any): void;
    /**
     * Implemented by derived subclasses, providing derived subclasses,
     * providing a description of the user interface.
     */
    render(): HTMLElement | string;
}
