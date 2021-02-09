/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let direction;
  return [...arr].sort(function (a, b) {
    (param === 'asc') ?
      direction = 1 : direction = -1;
    return direction * a.localeCompare(b, [], {caseFirst: 'upper'});
  });
}
