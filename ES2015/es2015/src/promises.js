import { resolve } from "path";

/**
 * Exécute de manière séquentielle de promises
 * 
 * @param funcs tableau de fonctions retournant une promise
 * @return Une promise contenant tous les resultats de promises exécutées
 */
export function chain(promises) {
    
}

/**
 * renvoie une promise qui sera resolue au bout d'un nombre définit de millisecondes
 * @param millisecond le nombre de millisecondes avant de résoudre la Promise
 */
export function delay(millisecond) {
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Success');
        }, millisecond);
    });
    return promise;
}

/**
 * Chaine l'exécution de deux promise et retourne les résultats dans un tableau
 * @return une promise retournant le tableau des resultats des deux promise passées en paramètre
 */
export function combine(promiseA, promiseB) {
    var promiseResult = new Promise((resolve, reject) => {

    });
}
