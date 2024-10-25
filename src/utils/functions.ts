
/**
 * 
 * @param {string} text - the input text to be sliced.
 * @param {number} [max=50]  - the maximum text before truncation.
 * @returns  the sliced text , with an ellipsed (...) appended if truncated.
 */

export function textslicer(text: string, max: number = 50) {
  if (text.length >= max) return `${text.slice(0, 50)}....`;
  return text;
}
