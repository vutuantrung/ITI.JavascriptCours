import { assert, expect, should } from 'chai';
import * as modules from './module';

describe("Module Tests", () => {
    it("Module test", (done) => {
        let keys = Object.keys(modules);
        assert(keys.length === 5, `There must be 5 variables. Found ${keys.length}`);
        assert(modules.val === 50, `There must be a 'val' property set to 50`);
        assert(modules.str === 'hello', `There must be a 'str' property set to 'hello'`);
        assert(
            typeof modules.doSomethingElse === 'function', 
            `There must be a 'str' property set to 'hello'`
        );

        done();
    }) 
});
