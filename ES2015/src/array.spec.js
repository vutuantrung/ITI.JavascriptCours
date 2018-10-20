"use strict";

var _chai = require("chai");

var _array = require("./array");

describe("Array Tests", function () {
    it("avg test", function () {
        var array = [3712, 4335, 12, 454, 123, 18587, 79, 3564];
        var avgResult = (0, _array.avg)(array);
        (0, _chai.expect)(avgResult).to.be.equal(3858.25);
    });

    it("multipleOf test", function () {
        var array = [];
        for (var i = 0; i < 250; i++) {
            array.push(i);
        }

        var multipleOfResult = (0, _array.multipleOf)(array, 7);
        multipleOfResult.forEach(function (value) {
            var modulo = value % 7;
            (0, _chai.expect)(modulo).to.be.equal(0);
        });
    });
});
//# sourceMappingURL=array.spec.js.map