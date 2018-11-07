import 'babel-polyfill';

/**
 * Même exercice que pour iterator
 * Mais en utilisant un generator
 */
export function toIterable(obj) {
    obj[Symbol.iterator] = function* () {
        let keys = Object.keys(obj);
        let index = 0;
        const n = keys.length;
        while (index < n) {
            let value = {
                key: keys[index],
                value: obj[keys[index]]
            }
            index++;
            yield value;
        }
    }
}

/**
 * exécuter toutes les fonctions et retourner les resultats 
 * sous forme d'iterator grâce au mot clé yield
 */
export function* sequence(...funcs) {
    let list = [...funcs];
    var index = 0;
    const n = list.length;
    while (index < n) {
        /*
        yield list[index].call();
        index++;
        */
        yield list[index++].call();
    }
}