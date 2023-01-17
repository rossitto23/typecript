/**
 * Partie 2 - Assertion de types
 */

// Attention à l'assertion de type
// Sinon des erreurs potentielles de type peuvent se déclencher.

let compteur1 = document.querySelector('#compteur'); // type : Element | null

// Peut être Element | null ==> union
// compteur1.innerHTML = "Hello there! "; // Ne fonctionne pas car peut être null

let compteur2 = document.querySelector('#compteur') as HTMLButtonElement;
compteur2.innerHTML = "Hello there!"; // Fonctionne! 

let compteur3 = <HTMLButtonElement>document.querySelector('#compteur');
compteur3.innerHTML = "Hello there!";

const i = (e: string | number) => {
    // compteur3.querySelector('span').innerHTML = e.toString();
    // compteur3.querySelector('span')!.innerHTML = e.toString();
    (<HTMLSpanElement>compteur3.querySelector('span')).innerHTML = e.toString();
}