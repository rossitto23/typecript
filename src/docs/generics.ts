/**
 * Partie 5 - Generics
 */

export function identity( arg: any) : any {
    return arg;
}

export function identity2<Type>(arg: Type): Type {
    return arg;
}