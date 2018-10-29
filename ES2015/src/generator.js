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
    obj[Symbol.iterator] = /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var keys, index, n, value;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        keys = Object.keys(obj);
                        index = 0;
                        n = keys.length;

                    case 3:
                        if (!(index < n)) {
                            _context.next = 10;
                            break;
                        }

                        value = {
                            key: keys[index],
                            value: obj[keys[index]]
                        };

                        index++;
                        _context.next = 8;
                        return value;

                    case 8:
                        _context.next = 3;
                        break;

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    });
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
    return regeneratorRuntime.wrap(function sequence$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    list = [].concat(funcs);
                    index = 0;
                    n = list.length;

                case 3:
                    if (!(index < n)) {
                        _context2.next = 8;
                        break;
                    }

                    _context2.next = 6;
                    return list[index++].call();

                case 6:
                    _context2.next = 3;
                    break;

                case 8:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked, this);
}
//# sourceMappingURL=generator.js.map