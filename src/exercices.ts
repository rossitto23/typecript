/**
 * Partie 1 - Exercice 01
 */

/**
 * Créer un code permettant de créer un compteur classique, avec +1, -1 et =...,
 * il faudra typé le tout au maximum, préparer 2 fonctions pour ca
 */

const btnMoins: HTMLButtonElement | null = document.querySelector('#btnMoins');
const btnPlus: HTMLButtonElement | null = document.querySelector('#btnPlus');
const total: HTMLSpanElement | null = document.querySelector('#total');

let valeur: number;

if(total) valeur = parseInt(total.innerText);

const increment: () => void = (): void =>{
    if(total) total.innerText = (++valeur).toString();
}

const decrement: () => void = (): void =>{

    if(total) total.innerText = (--valeur).toString();
}

btnMoins?.addEventListener('click', decrement)
btnPlus?.addEventListener('click', increment)