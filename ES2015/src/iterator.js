"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toIterable = toIterable;
exports.split = split;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Iterable =
/**
 * 
 * @param {*Function} iteratorFactory Fonction renvoyant un iterator
 */
exports.Iterable = function Iterable(iteratorFactory) {
    _classCallCheck(this, Iterable);

    this[Symbol.iterator] = iteratorFactory;
};

var Iterator =
/**
 * 
 * @param {*Function} onNext  callback qui sera appelée a chaque appel de la méthode next()
 */
exports.Iterator = function Iterator(onNext) {
    _classCallCheck(this, Iterator);

    this.onNext = onNext;
};
/**
 * Résultat d'un itération
 */


var IteratorResult = exports.IteratorResult = function IteratorResult(value, done) {
    _classCallCheck(this, IteratorResult);
};

/**
 * Rendre les propriétés d'un objet iterables
 * S'aider de la fonction Object.keys
 */


function toIterable(obj) {}

/**
 * Prend une chaine de caractères et renvoie un itérable permettant d'itérer sur tout les
 * mots de la chaine. Les mots sont séparés par des espaces.
 * @param {*String} string 
 */
function split(string) {}
//# sourceMappingURL=iterator.js.map