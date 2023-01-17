/**
 * Partie 1 - Types
 */

console.warn("Partie 1 - Types");

import { mesTypes } from "./docs/types";

console.log('mesTypes.a :>> ', mesTypes.a);
console.log('mesTypes.b :>> ', mesTypes.b);
console.log('mesTypes.c :>> ', mesTypes.c);
console.log('mesTypes.d :>> ', mesTypes.d);
console.log('mesTypes.e :>> ', mesTypes.e);
console.log('mesTypes.f :>> ', mesTypes.f);
console.log('mesTypes.g :>> ', mesTypes.g);
console.log('mesTypes.h :>> ', mesTypes.h);
console.log('mesTypes.i :>> ', mesTypes.i);
console.log('mesTypes.j :>> ', mesTypes.j);
console.log('mesTypes.k :>> ', mesTypes.k);
console.log('mesTypes.l :>> ', mesTypes.l);
console.log('mesTypes.m :>> ', mesTypes.m);
console.log('mesTypes.n :>> ', mesTypes.n);
console.log('mesTypes.o :>> ', mesTypes.o);
console.log('mesTypes.p :>> ', mesTypes.p);
console.log('mesTypes.q :>> ', mesTypes.q);


/**
 * Partie 2 - Assertion de types
 */

console.warn("Partie 2 - Assertion de types")

// voir src/docs/assertionTypes.ts

/**
 * Partie 3 - Narrowing
 */

console.warn("Partie 3 - Narrowing")

import { printId, exempleN, isDate } from "./docs/narrowing";

printId(12);
printId('a');
printId(null);

exempleN('a', 'a');

let birthDate = new Date('01/03/1997');
console.log('isDate(birthDate) :>> ', isDate(birthDate));
console.log('isDate("01/03/1997") :>> ', isDate('01/03/1997'));

/**
 * Partie 4 - Custom Types
 */

console.warn("Partie 4 - Custom Types")

import { Admin, Id } from "./docs/customTypes"

let admin: Admin = {
    roleId: 0,
    lastName: "Rossitto",
    firstName: "Nicolas"
}

let admin2: Admin = {
    roleId: 0,
    lastName: "test",
    firstName: "test"
}

console.log('admin :>> ', admin);

let idInt: Id = 45;
let idString: Id = 'a';

console.log('idInt :>> ', idInt);
console.log('idString :>> ', idString);

/**
 * Partie 5 - Generics
 */

console.warn("Partie 5 - Generics")

import { identity, identity2 } from './docs/generics'

const id1 = identity(3);

console.log('id1 :>> ', id1);

const id2 = identity2<string>('hello');