"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.avg = avg;
exports.multipleOf = multipleOf;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

/**
 * Faire la moyenne des valeurs du tableau en utilisant la méthode reduce 
 * @param {*Array} values Nombre à additionner
 */
function avg(values) {
  var reducer = function reducer(accumulator, currentValue) {
    return accumulator + currentValue;
  };
  return values.reduce(reducer) / values.length;
}

/**
 * Retourne un subset du tableau ne contenant uniquement les multiples de la valeur fournie. map
 * La fonction doit utliser la méthode filter
 * @param {*Array} array Tableau de valeurs
 * @param {*Number} values Le multiple
 */
function multipleOf(array, number) {
  return array.filter(function (x) {
    return x % number === 0;
  });
}
//# sourceMappingURL=array.js.map