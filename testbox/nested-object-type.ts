type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address: Address;
};

type Address = {
  street: string;
  city: string;
  country: string;
};

// Short way of doing this
/*
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address: {
    street: string;
    city: string;
    country: string;
  };
};
*/

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
