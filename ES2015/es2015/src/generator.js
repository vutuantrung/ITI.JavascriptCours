import 'babel-polyfill';

/**
 * Même exercice que pour iterator
 * Mais en utilisant un generator
 */
export function toIterable(obj) {
    obj[Symbol.iterator] = () => {
        let keys = Object.keys(obj);
        let i = -1;
        return {
            next() {
                let j = ++i;
                return {
                    value: {
                        key: keys[j],
                        value: obj[keys[j]]
                    },
                    done: i === keys.length
                }
            }
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
        /* index++;
        yield list[index].call();
        */
        yield list[index++].call();
    }
}