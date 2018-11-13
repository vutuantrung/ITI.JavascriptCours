var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logClass(target) {
    // save a reference to the original constructor
    var original = target;
    console.log(target);
    // a utility function to generate instances of a class
    function construct(constructor, args) {
        var c = function () {
            return constructor.apply(this, args);
        };
        c.prototype = constructor.prototype;
        return new c();
    }
    // the new constructor behaviour
    var f = function () {
        /**
         * This is where we added new behavior of class
         */
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("New: " + original.name);
        return construct(original, args);
    };
    // copy prototype so intanceof operator still works
    f.prototype = original.prototype;
    // return new constructor (will override original)
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
var x = new Person('vu', 'trung');
console.log('--------------------------');
function logCreate(target) {
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
function classDecoratorEx1(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.newProperty = "new property";
            _this.hello = "override";
            return _this;
        }
        return class_1;
    }(constructor));
}
var Greeter = /** @class */ (function () {
    function Greeter(m) {
        this.property = "property";
        this.hello = m;
        console.log(this.hello);
        console.log(this.property);
    }
    Greeter = __decorate([
        classDecoratorEx1
    ], Greeter);
    return Greeter;
}());
function classDecoratorEx2(originalConstructor) {
    var newConstructor = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Arguments: ", args.join(", "));
        new originalConstructor(args);
    };
    newConstructor.prototype = originalConstructor.prototype;
    return newConstructor;
}
var Pet = /** @class */ (function () {
    function Pet(name, age) {
    }
    Pet = __decorate([
        classDecoratorEx2
    ], Pet);
    return Pet;
}());
function classDecoratorEx3(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_2.prototype.ngOnDestroy = function () {
            console.log('Cleaning...');
            // Auto Clean things and call the original method
            constructor.prototype.ngOnDestroy.apply(this, arguments);
        };
        return class_2;
    }(constructor));
}
var ClassComponentEx3 = /** @class */ (function () {
    function ClassComponentEx3() {
        this.ngOnDestroy = function () {
            console.log('Executing...');
            setTimeout(function () {
                console.log('Executed.');
            }, 2000);
        };
    }
    ClassComponentEx3 = __decorate([
        classDecoratorEx3
    ], ClassComponentEx3);
    return ClassComponentEx3;
}());
var test = new ClassComponentEx3().ngOnDestroy();
