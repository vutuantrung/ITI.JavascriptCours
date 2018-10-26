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
function toIterable(obj) {}

/**
 * exécuter toutes les fonctions et retourner les resultats 
 * sous forme d'iterator grâce au mot clé yield
 */
function sequence() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  var list, listResult, n, i;
  return regeneratorRuntime.wrap(function sequence$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          list = [].concat(funcs);
          listResult = [];
          n = list.length;
          i = 0;

        case 4:
          if (!(i < n - 1)) {
            _context.next = 11;
            break;
          }

          _context.next = 7;
          return i + 1;

        case 7:
          listResult.push(list[i].call());

        case 8:
          i++;
          _context.next = 4;
          break;

        case 11:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}
//# sourceMappingURL=generator.js.map