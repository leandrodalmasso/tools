// Union

type Id = string | number;

// Enums

enum DIRECTIONS {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

// Type assertion

interface User {
  id: number;
  name: string;
}

const obj = {
  id: 1,
  name: "Lean",
};

const user = obj as User;

// Functions

function sum(x: number, y: number): number {
  return x + y;
}

const sum2 = (x: number, y: number): number => x + y;

type Sum3 = (x: number, y: number) => number;
const sum3: Sum3 = (x, y) => x + y;

// Generics

function identity<Type>(arg: Type): Type {
  return arg;
}

const four = identity<number>(4);
const hi = identity<string>("hi");

type Pair<U, V> = [U, V];
let pair: Pair<number, string> = [3, "hi"];
