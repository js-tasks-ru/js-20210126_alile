/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let result = '';
  let tmpElement = '';
  let tmpString = '';
  let counter = 1;

  if (size === 0) return '';
  if (size === undefined) return string;

  for (let i = 0; i < string.length - 1; i++) {
    tmpElement = string[i];
    tmpString = string.slice(i + 1);

    if (tmpString.startsWith(tmpElement)) {
      counter++;
    } else {
      result += tmpElement.repeat(counter).slice(0, size);
      counter = 1;
    }

    if (tmpString.length === 1) {
      result += tmpString;
    }
  }

  return result;
}



