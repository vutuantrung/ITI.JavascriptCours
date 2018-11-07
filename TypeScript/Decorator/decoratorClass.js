var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log("Hello world");
    };
    return Startup;
}());
function logClass(target) {
    //save reference to the original constructor
    var original = target;
    //a utility function to generate instance of a class
    function construct(constructor, args) {
        var c = function () {
            return constructor.apply(this, args);
        };
    }
    //the new constructor behavior
    var f = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("New: " + original.name);
        return construct(original, args);
    };
    //copy prototype so instanceof operator still works
    f.prototype = original.prototype;
    //return new constructor(will override original)
    return f;
}
var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Person = __decorate([
        logClass
    ], Person);
    return Person;
}());
var p = new Person("TUAN", "VU");
