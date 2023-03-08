// Generics

type Pair<U, V> = [U, V];
let pair: Pair<number, string> = [3, "hi"];

// Function type expressions

type GetProduct = (name: string) => { id: number; name: string };

const getProduct: GetProduct = (name) => ({ id: 123, name });
