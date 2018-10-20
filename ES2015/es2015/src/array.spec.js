import { assert, expect, should } from "chai";
import { multipleOf, avg } from './array';

describe("Array Tests", () => {
    it("avg test", () => {
        const array = [3712, 4335, 12, 454, 123, 18587, 79, 3564];
        const avgResult = avg(array);
        expect(avgResult).to.be.equal(3858.25);
    });

    it("multipleOf test", () => {
        const array = [];
        for (let i = 0; i < 250; i++) {
            array.push(i);
        }
   
        const multipleOfResult = multipleOf(array, 7);
        multipleOfResult.forEach((value) => {
            const modulo = value % 7;
            expect(modulo).to.be.equal(0);
        });
    });
});