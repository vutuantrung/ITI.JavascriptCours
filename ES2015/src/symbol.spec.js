'use strict';

var _chai = require('chai');

var _symbol = require('./symbol');

describe("Symbol Tests", function () {
    it("ClassWithPrivateProperty test", function () {
        var instance1 = new _symbol.ClassWithPrivateProperty();
        var instance2 = new _symbol.ClassWithPrivateProperty();

        (0, _chai.assert)(instance1.value === undefined, "The value should be undefined");
        instance1.value = 3712;
        (0, _chai.assert)(instance1.value === 3712, "The value should be 3712");
        (0, _chai.assert)(instance2.value === undefined, "The value should be undefined");
        instance2.value = "Hello World!";

        (0, _chai.assert)(instance2.value === "Hello World!", "The value should be 'Hello World!'");

        var props = Object.getOwnPropertyNames(instance1);
        var symProps = Object.getOwnPropertySymbols(instance1);

        (0, _chai.assert)(props.length === 0, "The instance should have public properties");
        (0, _chai.assert)(symProps.length === 1, "The instance should have one symbol property");
    });
});
//# sourceMappingURL=symbol.spec.js.map