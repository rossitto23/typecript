/**
 * Partie 3 - Narrowing
 * Permettre de réduire la liste des types disponibles
 */

let btn1 = document.querySelector('#increment'); // Element | null
let btn2 = document.querySelector('#increment')!; // Element
let btn3 = document.querySelector('#increment') as HTMLButtonElement; // HTMLButtonElement

// Attention pour btn2 et btn", vous empêchez le querySelector de
// fonctionner correctement en cas de null.

// Le mieux sera d'utiliser des conditions au lieu du narrowing '!' ou 'as'

// Autre exemple

let btn_dec: (e: MouseEvent) => void = (event: MouseEvent): void => {
    event.preventDefault();

    const input = document.querySelector<HTMLInputElement>('#res');

    if(input) {

    } 
    else {
    
    }
}

export function printId (id: string | number | null): void {
    
    if(id) {
        // Soit dans un string soit dans un number
        if(typeof id === "number") {
            // number
            console.log('id NUMBER:>> ', id);
        }
        else {
            let tmpId = parseInt(id);
            console.log('id STRING >', id);
        }
    } else {
        // null
        id = 42; 
        console.log('id :>> ', id);
    }
}

// Autre exemple (double variables locales)
export function exempleN (a: string | number, b: string | boolean) {
    if (a===b) {
        console.log('a :>> ', a); 
        // Ici il sera d'office en string.
        // Le seul point commun entre a et b est string
    }
}

// Autre exemple

function exempleOperateur(a : MouseEvent | HTMLInputElement) {
    // Exemple si a était un MouseEvent
    // MouseEvent étant un type de TypeScript, il n'est pas reconnu pr le typeof de natif dejs

    // if( typeof === a ) // marche pas

    if ("value" in a ) {
        // value est une propriété de HTMLInputElement
    }else if("toto" in a ) {
        console.log('TOTO :>> ', a); // Ne rentrera jamais 
    }else {
        console.log('Mouse Event :>> ', a);
    }
}

// Autre cas
// Je veux définir obligatoirement un retour Date sur a
export function isDate( a: any): a is Date {
    return a instanceof Date;
}

// Cas plus concret 

export class TUser {
    name: string
    constructor(name: string) { this.name = name}
}

export function isUser(a: any): a is TUser {
    return a instanceof TUser
}

// On aurait très bien pu mettre un booléen en retour de la fonction
// Mais dans la lecture de la documentation au survol de la fonction
// Il est plus intéressant de savoir que le retour d'un booléen sera
// Sur un TUser et non d'un booléen