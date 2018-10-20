import { assert, expect, should } from 'chai';
import { ClassWithPrivateProperty } from './symbol';

describe("Symbol Tests", () => {
    it("ClassWithPrivateProperty test", () => {
        let instance1 = new ClassWithPrivateProperty();
        let instance2 = new ClassWithPrivateProperty();
       
        
        assert( instance1.value === undefined, "The value should be undefined");
        instance1.value = 3712;
        assert( instance1.value === 3712, "The value should be 3712");
        assert( instance2.value === undefined, "The value should be undefined");
        instance2.value = "Hello World!";
        
        assert( instance2.value === "Hello World!", "The value should be 'Hello World!'");

        let props = Object.getOwnPropertyNames(instance1);
        let symProps = Object.getOwnPropertySymbols(instance1);
        
        assert( props.length === 0, "The instance should have public properties");
        assert( symProps.length === 1, "The instance should have one symbol property");
    }) 
});
