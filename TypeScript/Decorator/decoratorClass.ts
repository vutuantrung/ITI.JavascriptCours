function logClass<TFunction extends Function>(target: TFunction) {
    // save a reference to the original constructor
    var original = target;
    // a utility function to generate instances of a class
    function construct(constructor, args) {
        var c: any = function () {
            return constructor.apply(this, args);
        }
        c.prototype = constructor.prototype;
        return new c();
    }

    // the new constructor behaviour
    var f : any = function (...args) {
        //console.log("New: " + original.name);
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

console.log('--------------------------');

function logCreate<TFunction extends Function>(target: TFunction) {
    var f: any = function(...args){
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

function classDecoratorEx1<T extends {new(...args:any[]):{}}>(constructor: T){
    return class extends constructor{
        newProperty = "new property";
        hello = "override";
    }
}
@classDecoratorEx1
class Greeter{
    property = "property";
    hello: string;
    constructor(m: string){
        this.hello = m;
    }
}
var x = new Animal(4);
var y = new Person("trung", "vu");
console.log(new Greeter("world"));console.log(y);