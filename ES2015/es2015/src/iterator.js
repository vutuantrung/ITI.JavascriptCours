export class Iterable {
    /**
     * 
     * @param {*Function} iteratorFactory Fonction renvoyant un iterator
     */
    constructor(iteratorFactory) {
        this[Symbol.iterator] = iteratorFactory;
    }
}

export class Iterator {
    /**
     * 
     * @param {*Function} onNext callback qui sera appelée a chaque appel de la méthode next()
     */
    constructor(onNext) {
        this.onNext = () =>{
            let valueGot = onNext.call();
            return{
                value: valueGot,
                done: valueGot === undefined
            }
        };
    }

    get next() {
        return this.onNext;
    }

}
/**
 * Résultat d'un itération
 */
export class IteratorResult {
    constructor(value, done) {
        this.value = value;
        this.done = done;
    }
}

/**
 * Rendre les propriétés d'un objet iterables
 * S'aider de la fonction Object.keys
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
 * Prend une chaine de caractères et renvoie un itérable permettant d'itérer sur tout les
 * mots de la chaine. Les mots sont séparés par des espaces.
 * @param {*String} string 
 */
export function split(string) {
    let array = string.split(' ');
    return array[Symbol.iterator]();
}