"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.chain = chain;
exports.delay = delay;
exports.combine = combine;

var _path = require("path");

/**
 * Exécute de manière séquentielle de promises
 * 
 * @param funcs tableau de fonctions retournant une promise
 * @return Une promise contenant tous les resultats de promises exécutées
 */
function chain(promises) {}

/**
 * renvoie une promise qui sera resolue au bout d'un nombre définit de millisecondes
 * @param millisecond le nombre de millisecondes avant de résoudre la Promise
 */
function delay(millisecond) {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Success');
        }, millisecond);
    });
    return promise;
}

/**
 * Chaine l'exécution de deux promise et retourne les résultats dans un tableau
 * @return une promise retournant le tableau des resultats des deux promise passées en paramètre
 */
function combine(promiseA, promiseB) {
    var promiseResult = new Promise(function (resolve, reject) {});
}
//# sourceMappingURL=promises.js.map