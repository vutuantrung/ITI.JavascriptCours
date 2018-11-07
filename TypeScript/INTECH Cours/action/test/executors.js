"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require("reflect-metadata");
var R = require("../src");
var TestExecutor = (function () {
    function TestExecutor() {
    }
    TestExecutor.prototype.execute = function (parameters) {
        return Promise.resolve(parameters.a + parameters.b);
    };
    return TestExecutor;
}());
TestExecutor = __decorate([
    R.ActionExecutor({
        actionName: "test"
    }),
    __metadata("design:paramtypes", [])
], TestExecutor);
exports.TestExecutor = TestExecutor;
var WrongExecutor = (function () {
    function WrongExecutor() {
    }
    WrongExecutor.prototype.execute = function (parameters) {
        return Promise.resolve(parameters.a + parameters.b);
    };
    return WrongExecutor;
}());
exports.WrongExecutor = WrongExecutor;
var DuplicateTestExecutor = (function () {
    function DuplicateTestExecutor() {
    }
    DuplicateTestExecutor.prototype.execute = function (parameters) {
        return Promise.resolve(parameters.a + parameters.b);
    };
    return DuplicateTestExecutor;
}());
DuplicateTestExecutor = __decorate([
    R.ActionExecutor({
        actionName: "test"
    }),
    __metadata("design:paramtypes", [])
], DuplicateTestExecutor);
exports.DuplicateTestExecutor = DuplicateTestExecutor;
var WrongTestExecutor = (function () {
    function WrongTestExecutor() {
    }
    WrongTestExecutor.prototype.doStuff = function () {
    };
    return WrongTestExecutor;
}());
WrongTestExecutor = __decorate([
    R.ActionExecutor({
        actionName: "test"
    }),
    __metadata("design:paramtypes", [])
], WrongTestExecutor);
exports.WrongTestExecutor = WrongTestExecutor;
var DumbActivator = (function () {
    function DumbActivator() {
    }
    DumbActivator.prototype.activate = function (type) {
        if (type == TestExecutor) {
            return new TestExecutor();
        }
    };
    return DumbActivator;
}());
exports.DumbActivator = DumbActivator;
//# sourceMappingURL=executors.js.map