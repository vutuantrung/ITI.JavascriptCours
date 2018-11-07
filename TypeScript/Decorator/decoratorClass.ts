
class Startup{
    public static main(): void{
        console.log("Hello world");
    }
}

function logClass(target: any){

    //save reference to the original constructor
    var original = target;

    //a utility function to generate instance of a class
    function construct(constructor, args){
        var c: any = function(){
            return constructor.apply(this, args);
        }
    }

    //the new constructor behavior
    var f: any = function(...args){
        console.log("New: " + original.name);
        return construct(original, args);
    }

    //copy prototype so instanceof operator still works
    f.prototype = original.prototype;

    //return new constructor(will override original)
    return f;
}

@logClass
class Person{
    public name: string;
    public surname: string;

    constructor(name: string, surname: string){
        this.name = name;
        this.surname = surname;
    }
}

var p = new Person("TUAN", "VU");