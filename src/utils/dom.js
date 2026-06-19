/**
 * Converts an HTML string into a DOM element.
 * Useful for Vanilla JS components.
 * 
 * @param {string} htmlString - The HTML string to parse
 * @returns {Element} The resulting DOM element
 */
export function htmlToElement(htmlString) {
  const template = document.createElement('template');
  htmlString = htmlString.trim();
  template.innerHTML = htmlString;
  return template.content.firstChild;
}

/**
 * Converts an HTML string into multiple DOM elements.
 * 
 * @param {string} htmlString - The HTML string to parse
 * @returns {NodeList} The resulting DOM elements
 */
export function htmlToElements(htmlString) {
  const template = document.createElement('template');
  htmlString = htmlString.trim();
  template.innerHTML = htmlString;
  return template.content.childNodes;
}
