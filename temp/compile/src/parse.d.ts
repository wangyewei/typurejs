/**
 * Iterate over the nodes of the lement to obtain node infomations.
 * which is convenient to collect events in the fucure and precess the
 * responsive data variable.Recursion is perfored on the child nodes of
 * the node.
 */
export declare const processElement: (element: Element) => Node;
/**
 * Create a DocumentFragment as the root node, and then iterrate
 * over the collection of the element nodes passed in.
 * For each elment node, it calls the `processElement` function for
 * processing and adds the returned clone element node to the root node.
 * Finnaly, the complete document fragment is returned.
 */
export declare const createElement: (elements: HTMLCollection) => DocumentFragment;
/**
 * Parses jsx-like template string,and returns a collection of html
 * element
 */
export declare const parseElement: (templateHTMLstr: string) => HTMLCollection;
/**
 * The purpose of this function is to convert JSX-like template strings into document
 * fragments that can be inserted into the DOM. It constructs a DOM tree representing
 * the template structure by cloning nodes, recursive processing, and manipulation of
 * document fragments, and returns it wrapped in a document fragment. This document
 * fragment can be easily inserted into an existing DOM structure to enable the ability
 * to dynamically generate and update page content.
 */
export declare const parse: (templateHTMLstr: string) => DocumentFragment;
