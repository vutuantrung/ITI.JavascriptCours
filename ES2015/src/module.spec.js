'use strict';

var _chai = require('chai');

var _module = require('./module');

var modules = _interopRequireWildcard(_module);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe("Module Tests", function () {
    it("Module test", function (done) {
        var keys = Object.keys(modules);
        (0, _chai.assert)(keys.length === 5, 'There must be 5 variables. Found ' + keys.length);
        (0, _chai.assert)(modules.val === 50, 'There must be a \'val\' property set to 50');
        (0, _chai.assert)(modules.str === 'hello', 'There must be a \'str\' property set to \'hello\'');
        (0, _chai.assert)(typeof modules.doSomethingElse === 'function', 'There must be a \'str\' property set to \'hello\'');

        done();
    });
});
//# sourceMappingURL=module.spec.js.map