'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var Iterator = exports.Iterator = function () {
    /**
     * 
     * @param {*Function} onNext  callback qui sera appelée a chaque appel de la méthode next()
     */
    function Iterator(onNext) {
        _classCallCheck(this, Iterator);

        this.onNext = onNext;
    }

    _createClass(Iterator, [{
        key: 'next',
        get: function get() {
            return this.onNext;
        }
    }]);

    return Iterator;
}();
/**
 * Résultat d'un itération
 */


var IteratorResult = exports.IteratorResult = function IteratorResult(value, done) {
    _classCallCheck(this, IteratorResult);

    this.value = value;
    this.done = done;
};

/**
 * Rendre les propriétés d'un objet iterables
 * S'aider de la fonction Object.keys
 */


function toIterable(obj) {
    obj[Symbol.iterator] = function () {
        var keys = Object.keys(obj);
        var i = -1;
        return {
            next: function next() {
                return {
                    value: obj[keys[++i]],
                    done: i === keys.length
                };
            }
        };
    };
}

/**
 * Prend une chaine de caractères et renvoie un itérable permettant d'itérer sur tout les
 * mots de la chaine. Les mots sont séparés par des espaces.
 * @param {*String} string 
 */
function split(string) {
    var array = string.split(' ');
    return array[Symbol.iterator]();
}
//# sourceMappingURL=iterator.js.map