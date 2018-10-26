"use strict";
require("reflect-metadata");
var R = require("../src");
var test = require("./executors");
var chai_1 = require("chai");
describe("Action Sender Test", function () {
    var activator = new test.DumbActivator();
    var resolver = new R.ActionResolver(activator);
    resolver.registerExecutor(test.TestExecutor);
    it("Executor should be executed", function (done) {
        var sender = new R.ActionInvoker(resolver);
        sender.invoke("test", {
            a: 1,
            b: 6
        }).then(function (r) {
            chai_1.expect(r).to.be.eql(7);
            done();
        });
    });
    it("ActionSender should not found the executor and throw an exception", function () {
        var sender = new R.ActionInvoker(resolver);
        return chai_1.expect(function () {
            sender.invoke("tests", {
                a: 1,
                b: 6
            });
        }).to.throw("No executor found for the action tests");
    });
});
//# sourceMappingURL=ActionHandler.spec.js.map