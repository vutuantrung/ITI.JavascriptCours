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
     * @param {*Function} onNext  callback qui sera appelée a chaque appel de la méthode next()
     */
    constructor(onNext) {
        this.onNext = onNext;
    }
}
/**
 * Résultat d'un itération
 */
export class IteratorResult {
    constructor(value, done) {
    }
}

/**
 * Rendre les propriétés d'un objet iterables
 * S'aider de la fonction Object.keys
 */
export function toIterable(obj) {
   
}

/**
 * Prend une chaine de caractères et renvoie un itérable permettant d'itérer sur tout les
 * mots de la chaine. Les mots sont séparés par des espaces.
 * @param {*String} string 
 */
export function split(string) {
    
}
