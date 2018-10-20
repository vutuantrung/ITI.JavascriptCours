'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Utiliser un symbol pour rendre privée une propriété qui devra être exploitée 
 * par le getter et le setter de la propriété nommé 'value'
 */
var value = Symbol('value');

var ClassWithPrivateProperty = exports.ClassWithPrivateProperty = function () {
    function ClassWithPrivateProperty() {
        _classCallCheck(this, ClassWithPrivateProperty);

        this[value];
    }

    _createClass(ClassWithPrivateProperty, [{
        key: 'value',
        get: function get() {
            return this[value];
        },
        set: function set(val) {
            this[value] = val;
        }
    }]);

    return ClassWithPrivateProperty;
}();
//# sourceMappingURL=symbol.js.map