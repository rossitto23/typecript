/**
 * Partie 4 - Custom Types
 * Permet de créer ses propres types
 */

// Avantages des custom types, pas besoin de classe 
// avec constructeur et instanciation

type Admin = { roleId: number, lastName: string, firstName: string}

type Id = string | number;

export { Admin, Id }

