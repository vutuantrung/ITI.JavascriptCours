function logClass<TFunction extends Function>(target: TFunction) {
    // save a reference to the original constructor
    var original = target;
    console.log(target);
    // a utility function to generate instances of a class
    function construct(constructor, args) {
        var c: any = function () {
            return constructor.apply(this, args);
        }
        c.prototype = constructor.prototype;
        return new c();
    }

    // the new constructor behaviour
    var f: any = function (...args) {
        /**
         * This is where we added new behavior of class
         */
        
        console.log("New: " + original.name);
        return construct(original, args);
    }

    // copy prototype so intanceof operator still works
    f.prototype = original.prototype;

    // return new constructor (will override original)
    return f;
}

@logClass
class Person {

    public name: string;
    public surname: string;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }
}

var x = new Person('vu', 'trung');

console.log('--------------------------');

function logCreate<TFunction extends Function>(target: TFunction) {
    var f: any = function (...args) {
        console.log('Object created with args: ', args);
    }

    return f;

    /*return function (...args) {
        console.log('Object created with args: ', args);
        return new Class(...args);
    }*/
}

@logCreate
class Animal {
    constructor(footCount) {
        console.log("original constructor Animal");
    }
}

function classDecoratorEx1<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}
@classDecoratorEx1
class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
        console.log(this.hello);
        console.log(this.property);
    }
}

function classDecoratorEx2<T extends Function>(originalConstructor: new(...args: any[]) => T){
    var newConstructor = (...args) => {
        console.log("Arguments: ", args.join(", "));
        new originalConstructor(args);
    }

    newConstructor.prototype = originalConstructor.prototype;
    return newConstructor;
}

@classDecoratorEx2
class Pet {
    constructor(name: string, age: number){}
}

function classDecoratorEx3(constructor: Function){
    return class extends constructor{
        ngOnDestroy(){
            console.log('Cleaning...');
            // Auto Clean things and call the original method
            constructor.prototype.ngOnDestroy.apply(this, arguments);
        }
    }
}

@classDecoratorEx3
class ClassComponentEx3{
    ngOnDestroy = () =>{
        console.log('Executing...');
        setTimeout(() => {
            console.log('Executed.');
        }, 2000);
    }
}
var test = new ClassComponentEx3().ngOnDestroy();