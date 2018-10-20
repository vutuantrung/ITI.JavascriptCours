"use strict";

var _chai = require("chai");

var _iterator2 = require("./iterator");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

describe("Iterator Tests", function () {
    it("toIterable test", function (done) {
        var obj = {
            a: 1,
            b: "a",
            c: true,
            d: [1, 2, 3],
            e: function e() {}
        };

        (0, _iterator2.toIterable)(obj);
        var props = [].concat(_toConsumableArray(obj));
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

    it("IteratorResult class test", function (done) {
        var iterationResult = new _iterator2.IteratorResult(1, false);
        (0, _chai.assert)(iterationResult.value === 1, "The IteratorResult value property must be 1");

        (0, _chai.assert)(iterationResult.done === false, "The IteratorResult done property must be false");
        done();
    });

    it("Iterator class test", function (end) {
        var values = [Math.floor(Math.random() * 100 + 1), Math.floor(Math.random() * 100 + 1), Math.floor(Math.random() * 100 + 1)];
        var i = 0;
        var iterator = new _iterator2.Iterator(function () {
            if (i < values.length) {
                return values[i++];
            }
        });

        (0, _chai.assert)(typeof iterator.next === 'function', "The Iterator next property must be  a function");

        var iterationResult = iterator.next();
        (0, _chai.assert)(iterationResult.value === values[0] && iterationResult.done === false, "The first iteration result value must be " + values[0] + " and must not be done");
        iterationResult = iterator.next();
        (0, _chai.assert)(iterationResult.value === values[1] && iterationResult.done === false, "The second iteration result value must be " + values[1] + " and must not be done");
        iterationResult = iterator.next();
        (0, _chai.assert)(iterationResult.value === values[2] && iterationResult.done === false, "The third iteration result value must be " + values[2] + " and must not be done");
        iterationResult = iterator.next();
        (0, _chai.assert)(iterationResult.value === undefined && iterationResult.done === true, "The last iteration result value must be undefined and must be done");
        end();
    });

    it("split test", function () {
        var words = "A Doubs riche commune d'un peu plus de 2 000 habitants proche de Pontarlier (Doubs) et de la fronti\xE8re suisse un b\xE2timent tout neuf au bord de la route principale vient d'\xEAtre termin\xE9";
        var wordIterable = (0, _iterator2.split)(words);
        (0, _chai.assert)(typeof wordIterable.next === 'function', "The Iterator next property must be  a function");
        words.split(' ').forEach(function (w) {
            var result = wordIterable.next();
            (0, _chai.expect)(w).to.be.equal(result.value);
        });
        var end = wordIterable.next();
        (0, _chai.expect)(end.value).to.be.undefined;
        (0, _chai.expect)(end.done).to.be.true;
    });
});
//# sourceMappingURL=iterator.spec.js.map