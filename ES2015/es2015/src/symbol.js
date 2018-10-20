/**
 * Utiliser un symbol pour rendre privée une propriété qui devra être exploitée 
 * par le getter et le setter de la propriété nommé 'value'
 */
const value = Symbol('value');
export class ClassWithPrivateProperty {
    constructor() {
        this[value];
    }

    get value() {
        return this[value];
    }

    set value(val){
        this[value] = val;
    }
}
