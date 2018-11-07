function logClass<TFunction extends Function>(target: TFunction) {
    console.log("logClass 1");
    // save a reference to the original constructor
    var original = target;
    console.log(target);
    // a utility function to generate instances of a class
    function construct(constructor, args) {
        var c: any = function () {
            console.log("function construct 1");
            return constructor.apply(this, args);
        }
        c.prototype = constructor.prototype;
        return new c();
    }

    // the new constructor behaviour
    var f : any = function (...args) {
        console.log(args);
        //console.log("New: " + original.name);
        return construct(original, args);
    }

    console.log("logClass 2");
    // copy prototype so intanceof operator still works
    f.prototype = original.prototype;
    console.log(f);
    // return new constructor (will override original)
    return f;
}

@logClass
class Person {

    public name: string;
    public surname: string;

    constructor(name: string, surname: string) {
        console.log("BP2");
        this.name = name;
        this.surname = surname;
        console.log(this.name + ' and ' + this.surname);
    }
}

console.log('--------------------------');

function logCreate<TFunction extends Function>(target: TFunction) {
    console.log(target);
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
console.log('--------------------------');
var var1 = new Animal("thisisAnimal");
var var2 = new Animal(4);
console.log('--------------------------');
var var3 = new Person('one', 'two');