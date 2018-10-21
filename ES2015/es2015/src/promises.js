import {
    resolve
} from "path";

/**
 * Exécute de manière séquentielle de promises
 * 
 * @param funcs tableau de fonctions retournant une promise
 * @return Une promise contenant tous les resultats de promises exécutées
 */
export function chain(promises) {
    Promise.all(promises);
}

/**
 * renvoie une promise qui sera resolue au bout d'un nombre définit de millisecondes
 * @param millisecond le nombre de millisecondes avant de résoudre la Promise
 */
export function delay(millisecond) {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            reject();
        }, millisecond);
    });
    return promise;
}

/**
 * Chaine l'exécution de deux promise et retourne les résultats dans un tableau
 * @return une promise retournant le tableau des resultats des deux promise passées en paramètre
 */
export function combine(promiseA, promiseB) {
    return Promise.all([promiseA, promiseB]);
}
var firstMethod = function () {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('first method completed');
            resolve({
                data: '123'
            });
        }, 2000);
    });
    return promise;
};


var secondMethod = function (someStuff) {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('second method completed');
            resolve({
                newData: someStuff.data + ' some more data'
            });
        }, 2000);
    });
    return promise;
};

var thirdMethod = function (someStuff) {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('third method completed');
            resolve({
                result: someStuff.newData
            });
        }, 3000);
    });
    return promise;
};

/*firstMethod()
    .then(secondMethod)
    .then(thirdMethod);*/