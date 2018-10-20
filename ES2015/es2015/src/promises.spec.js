import { assert, expect, should } from "chai";
import { delay, chain, combine } from "./promises";

describe("Promise Tests", function() {
    const count = 50;

    it("Test de la fonction delay", function(done) {
        let time = new Date().getTime();
        let delayTime = 200;

        delay(delayTime).then(() => {
            let endtime = new Date().getTime();
            let elapsed = endtime - time;
            let roundedElapsed = Math.round(elapsed / 100) * 100;
            assert( roundedElapsed === delayTime, `The delay must be of ${delayTime}. Elapsed time is ${elapsed}`);
            done();
        }).catch( e => done(e));
    });

    it("Test de la fonction combine", function(done) {
        let timeA  = Math.floor((Math.random() * 50) + 10);
        let timeB  = Math.floor((Math.random() * 50) + 10);
        let resolvedA = false;
        let resolvedB = false;
        
        combine(new Promise((resolve) => {
            setTimeout(()=> {
                resolvedA = true;
                resolve(1);
            }, timeA);
        }), new Promise((resolve) => {
            setTimeout(()=>{
                resolvedB = true;
                resolve(2);
            }, timeB);
        })).then( r => {
            assert( r instanceof Array, "The result must be an array" );
            expect(r.length, "result array length").to.be.eql(2);
            done();
        });
    });

    it("Test de la fonction chain", function(done) {
        const promises = [];
        let sum = 0;
        const asserts = [];

        // generate promises
        for (let i = 0; i < count; i++) {
            let time  = Math.floor((Math.random() * 50) + 10);
            promises.push( new Promise((resolve, reject) => {
                if (asserts.length > 0) {
                    // assert that the previous promise is done
                    assert(asserts[i-1] === i-1, "The previous promise must be done");
                }

                setTimeout(() => {
                    sum += i;
                    asserts.push(i);
                    resolve(i);
                }, time);
            }));
        }

        // execute all method
        chain(promises)
            .then((results) => {
                let sumResult = results.reduce((prev, current) => {
                    return prev + current;
                }, 0);
                // assert that all the results are set
                expect(results.length).to.be.eql(promises.length);
                expect(sumResult).to.be.eql(sum);
                done();
            })
            .catch( e => done(e));
    });
});

