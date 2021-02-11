/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  /*let result = {};

   for (let field in fields){
    alert(field);
   }
  };
  */

  const result = {};

  for (let arg of fields) {
    if (arg in obj) {
      result[arg] = obj[arg];
    }
  }
  return result;
};
