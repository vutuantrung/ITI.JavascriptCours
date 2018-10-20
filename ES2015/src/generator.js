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
  return regeneratorRuntime.wrap(function sequence$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}
//# sourceMappingURL=generator.js.map