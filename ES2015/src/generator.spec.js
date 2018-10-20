"use strict";

var _chai = require("chai");

var _generator = require("./generator");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

describe("Generator Tests", function () {
    it("toIterable test", function (done) {
        var obj = {
            a: 1,
            b: "a",
            c: true,
            d: [1, 2, 3],
            e: function e() {}
        };

        (0, _generator.toIterable)(obj);
        var props = [].concat(_toConsumableArray(obj));
        var it = obj[Symbol.iterator]();

        (0, _chai.assert)(it[Symbol.toStringTag] === "Generator", "The iterator must be provided via a generator function");
        (0, _chai.assert)(props.length === Object.keys(obj).length, "the properties length must be " + Object.keys(obj).length);

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var prop = _step.value;

                (0, _chai.assert)(prop.key != undefined && prop.value != undefined, 'The iteration value must be a key/value object');
                (0, _chai.assert)(obj.hasOwnProperty(prop.key), "the property '" + prop.key + "' does not exists on the object");
                (0, _chai.assert)(prop.value === obj[prop.key], "the property '" + prop.key + "' must have the value " + obj[prop.key]);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        done();
    });

    it("Emitter test", function (done) {
        var emittedValue = void 0;
        var emitter = new _generator.Emitter(function (value) {
            emittedValue = value;
        });
        var rand = Math.floor(Math.random() * 10000 + 1);
        emitter.emit(rand);
        (0, _chai.assert)(emittedValue === rand, "The receiver function should receive the emitted value");

        rand = Math.floor(Math.random() * 10000 + 1);
        emitter.emit(rand);

        (0, _chai.assert)(emittedValue === rand, "The receiver function should receive the emitted value");
        done();
    });

    it("sequence test", function (done) {
        var results = [];
        var funcs = [];
        for (var i = 0; i < 50; i++) {
            funcs.push(function () {
                var rand = Math.floor(Math.random() * 10000 + 1);
                results.push(rand);
                return rand;
            });
        }
        var seqRes = [].concat(_toConsumableArray(_generator.sequence.apply(undefined, funcs)));
        (0, _chai.assert)(funcs.length === results.length, "There must be " + funcs.length + " results");
        (0, _chai.expect)(results).to.be.eql(seqRes);
        done();
    });
});
//# sourceMappingURL=generator.spec.js.map