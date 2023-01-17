/**
 * Partie 5 - Generics
 */

export function identity( arg: any) : any {
    return arg;
}

export function identity2<Type>(arg: Type): Type {
    return arg;
}

/**
 * Classes génériques
 */

export class GenericNumber<T> {

    zeroValue: T

    add: (x: T, y: T) => T
}

/*
    Interface
*/

interface IMyLength {
    length: number
}