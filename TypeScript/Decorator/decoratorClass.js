var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logClass(target) {
    console.log("logClass 1");
    // save a reference to the original constructor
    var original = target;
    console.log(target);
    // a utility function to generate instances of a class
    function construct(constructor, args) {
        var c = function () {
            console.log("function construct 1");
            return constructor.apply(this, args);
        };
        c.prototype = constructor.prototype;
        return new c();
    }
    // the new constructor behaviour
    var f = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(args);
        //console.log("New: " + original.name);
        return construct(original, args);
    };
    console.log("logClass 2");
    // copy prototype so intanceof operator still works
    f.prototype = original.prototype;
    console.log(f);
    // return new constructor (will override original)
    return f;
}
var Person = /** @class */ (function () {
    function Person(name, surname) {
        console.log("BP2");
        this.name = name;
        this.surname = surname;
        console.log(this.name + ' and ' + this.surname);
    }
    Person = __decorate([
        logClass
    ], Person);
    return Person;
}());
console.log('--------------------------');
function logCreate(target) {
    console.log(target);
    var f = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('Object created with args: ', args);
    };
    return f;
    /*return function (...args) {
        console.log('Object created with args: ', args);
        return new Class(...args);
    }*/
}
var Animal = /** @class */ (function () {
    function Animal(footCount) {
        console.log("original constructor Animal");
    }
    Animal = __decorate([
        logCreate
    ], Animal);
    return Animal;
}());
console.log('--------------------------');
var var1 = new Animal("thisisAnimal");
var var2 = new Animal(4);
console.log('--------------------------');
var var3 = new Person('one', 'two');
console.log(var3.name + ' and ' + var3.surname);
