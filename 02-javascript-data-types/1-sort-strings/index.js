/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let sorted = [...arr].sort(function (a, b) {
    return a.localeCompare(b,[], {caseFirst: 'upper'});
  });
  if (param === 'asc') {
    return sorted;
  } else {
    return sorted.reverse();
  }
}
