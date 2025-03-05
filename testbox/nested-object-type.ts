type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address; // we can make any part of an object optional
  // but this just reduces type-safety
  // address: Address;
};

type Address = {
  street: string;
  city: string;
  country: string;
};

let person1: Person = {
  name: "John",
  age: 42,
  isStudent: true,
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
};

let person2: Person = {
  name: "Jane",
  age: 30,
  isStudent: false,
  address: {
    street: "456 Elm St",
    city: "Othertown",
    country: "Canada",
  },
};

let person3: Person = {
  name: "Bob",
  age: 25,
  isStudent: true,
};

function displayInfo(person: Person) {
  // we can add ? to indicate that the address property may be optional
  console.log(`${person.name} lives at ${person.address?.street}.`);
}

displayInfo(person1);
