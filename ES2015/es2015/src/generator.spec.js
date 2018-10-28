import { assert, expect, should } from "chai";
import { toIterable, sequence, Emitter } from './generator';

describe("Generator Tests", () => {
    it("toIterable test", (done) => {
        let obj = {
            a: 1,
            b: "a",
            c: true,
            d: [1, 2, 3],
            e: () => { }
        };

        toIterable(obj);
        let props = [...obj];
        let it = obj[Symbol.iterator]();
        assert(
            it[Symbol.toStringTag] === "Generator",
            "The iterator must be provided via a generator function"
        );
        assert(
            props.length === Object.keys(obj).length,
            `the properties length must be ${Object.keys(obj).length}`
        );

        for (let prop of obj) {
            assert(
                prop.key != undefined && prop.value != undefined,
                'The iteration value must be a key/value object'
            );
            assert(
                obj.hasOwnProperty(prop.key),
                `the property '${prop.key}' does not exists on the object`
            );
            assert(
                prop.value === obj[prop.key],
                `the property '${prop.key}' must have the value ${obj[prop.key]}`
            );
        }
        done();
    });

    it("Emitter test", (done) => {
        let emittedValue;
        let emitter = new Emitter((value) => {
            emittedValue = value;
        });
        let rand = Math.floor((Math.random() * 10000) + 1);
        emitter.emit(rand);
        assert(
            emittedValue === rand,
            "The receiver function should receive the emitted value"
        );

        rand = Math.floor((Math.random() * 10000) + 1);
        emitter.emit(rand);

        assert(
            emittedValue === rand,
            "The receiver function should receive the emitted value"
        );
        done();
    });

    it("sequence test", (done) => {
        let results = [];
        let funcs = [];
        for (let i = 0; i < 50; i++) {
            funcs.push(() => {
                let rand = Math.floor((Math.random() * 10000) + 1);
                results.push(rand);
                return rand;
            })
        }
        let seqRes = [...sequence(...funcs)];
        assert(
            funcs.length === results.length,
            `There must be ${funcs.length} results`
        );
        expect(results).to.be.eql(seqRes);
        done();
    })
});
