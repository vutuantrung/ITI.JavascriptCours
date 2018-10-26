import 'babel-polyfill';

/**
 * Même exercice que pour iterator
 * Mais en utilisant un generator
 */
export function toIterable(obj) {

}

/**
 * exécuter toutes les fonctions et retourner les resultats 
 * sous forme d'iterator grâce au mot clé yield
 */
export function *sequence(...funcs) {
    let list = [...funcs];
    let listResult = []
    const n = list.length;
    for (let i = 0; i < n - 1; i++) {
        yield i + 1;
        listResult.push(list[i].call());
    }
}