"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * La classe TextIndexer permet d'indexer du text via la méthode indexText
 */
var TextIndexer = exports.TextIndexer = function () {
    function TextIndexer() {
        _classCallCheck(this, TextIndexer);

        this.map = new Map();
    }

    /**
     * Permet d'indexer du texte. Chaque mot doit être rangé dans un Map.
     * Le map doit contenir tous les mots rencontrés associé au nombre de fois que le mot à été rencontré dans le texte.
     * Les fonctions String.split() et String.replace vous seront utiles !
     * @param text Le texte source à indexer
     */


    _createClass(TextIndexer, [{
        key: "indexText",
        value: function indexText(text) {}

        /**
         * Le poids d'un mot correspond au nombre de fois qu'il à été rencontré dans le texte.
         */

    }, {
        key: "getWeight",
        value: function getWeight(word) {}

        /**
         * retourne le nombre de mots indexés
         */

    }, {
        key: "count",
        get: function get() {}
    }]);

    return TextIndexer;
}();
//# sourceMappingURL=map.js.map