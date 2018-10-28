'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toIterable = toIterable;
exports.sequence = sequence;

require('babel-polyfill');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(sequence);

/**
 * Même exercice que pour iterator
 * Mais en utilisant un generator
 */
function toIterable(obj) {
    obj[Symbol.iterator] = function () {
        var keys = Object.keys(obj);
        var i = -1;
        return {
            next: function next() {
                var j = ++i;
                return {
                    value: {
                        key: keys[j],
                        value: obj[keys[j]]
                    },
                    done: i === keys.length
                };
            }
        };
    };
}

/**
 * exécuter toutes les fonctions et retourner les resultats 
 * sous forme d'iterator grâce au mot clé yield
 */
function sequence() {
    for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
        funcs[_key] = arguments[_key];
    }

    var list, index, n;
    return regeneratorRuntime.wrap(function sequence$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    list = [].concat(funcs);
                    index = 0;
                    n = list.length;

                case 3:
                    if (!(index < n)) {
                        _context.next = 8;
                        break;
                    }

                    _context.next = 6;
                    return list[index++].call();

                case 6:
                    _context.next = 3;
                    break;

                case 8:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}
//# sourceMappingURL=generator.js.map