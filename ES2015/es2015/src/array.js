// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

/**
 * Faire la moyenne des valeurs du tableau en utilisant la méthode reduce 
 * @param {*Array} values Nombre à additionner
 */
export function avg(values) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return values.reduce(reducer) / values.length;
}

/**
 * Retourne un subset du tableau ne contenant uniquement les multiples de la valeur fournie. map
 * La fonction doit utliser la méthode filter
 * @param {*Array} array Tableau de valeurs
 * @param {*Number} values Le multiple
 */
export function multipleOf(array, number) {
    return array.filter(x => x%number === 0);
}
