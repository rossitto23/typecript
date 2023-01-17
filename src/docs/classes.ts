/**
 * Partie 6 - Classes
 */

class Human {
    gender: string
    height: number
    weight: number

    private _etnic: string
    protected __colorEyes: string

}

// Encapsulation
// Le niveau de portée des propriétés dans la classe

// public       disponible partout
// protected    disponible uniquement dans la classe parent et dans les classes enfants (TypeScript!)
// private      disponible uniquement dans la classe (TypeScript!)

// Héritage 
// Transmettre les membres d'une classe parent à ses classes enfants
// Pour faire de l'héritage, on utilise extends
// !! Un parent ne peut pas accéder à une propriété d'un enfant, l'inverse oui
// !! Le constructeur du parent devra toujours est appelé dans celui de l'enfant