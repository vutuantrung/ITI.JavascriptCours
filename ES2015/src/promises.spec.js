"use strict";

var _chai = require("chai");

var _promises = require("./promises");

describe("Promise Tests", function () {
    var count = 50;

    it("Test de la fonction delay", function (done) {
        var time = new Date().getTime();
        var delayTime = 200;

        (0, _promises.delay)(delayTime).then(function () {
            var endtime = new Date().getTime();
            var elapsed = endtime - time;
            var roundedElapsed = Math.round(elapsed / 100) * 100;
            (0, _chai.assert)(roundedElapsed === delayTime, "The delay must be of " + delayTime + ". Elapsed time is " + elapsed);
            done();
        }).catch(function (e) {
            return done(e);
        });
    });

    it("Test de la fonction combine", function (done) {
        var timeA = Math.floor(Math.random() * 50 + 10);
        var timeB = Math.floor(Math.random() * 50 + 10);
        var resolvedA = false;
        var resolvedB = false;

        (0, _promises.combine)(new Promise(function (resolve) {
            setTimeout(function () {
                resolvedA = true;
                resolve(1);
            }, timeA);
        }), new Promise(function (resolve) {
            setTimeout(function () {
                resolvedB = true;
                resolve(2);
            }, timeB);
        })).then(function (r) {
            (0, _chai.assert)(r instanceof Array, "The result must be an array");
            (0, _chai.expect)(r.length, "result array length").to.be.eql(2);
            done();
        });
    });

    it("Test de la fonction chain", function (done) {
        var promises = [];
        var sum = 0;
        var asserts = [];

        // generate promises

        var _loop = function _loop(i) {
            var time = Math.floor(Math.random() * 50 + 10);
            promises.push(new Promise(function (resolve, reject) {
                if (asserts.length > 0) {
                    // assert that the previous promise is done
                    (0, _chai.assert)(asserts[i - 1] === i - 1, "The previous promise must be done");
                }

                setTimeout(function () {
                    sum += i;
                    asserts.push(i);
                    resolve(i);
                }, time);
            }));
        };

        for (var i = 0; i < count; i++) {
            _loop(i);
        }

        // execute all method
        (0, _promises.chain)(promises).then(function (results) {
            var sumResult = results.reduce(function (prev, current) {
                return prev + current;
            }, 0);
            // assert that all the results are set
            (0, _chai.expect)(results.length).to.be.eql(promises.length);
            (0, _chai.expect)(sumResult).to.be.eql(sum);
            done();
        }).catch(function (e) {
            return done(e);
        });
    });
});
//# sourceMappingURL=promises.spec.js.map