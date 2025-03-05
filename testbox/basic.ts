let myName: string = "Bob";
// Primitive data types: string, number, boolean
let numberOfWheels: number = 4;
let isStudent: boolean = false;

// we can create new types
type Food = string;
let favoriteFood: Food = "pizza";

// object types

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

let person1: Person = {
  name: "John",
  age: 42,
  isStudent: true,
};
