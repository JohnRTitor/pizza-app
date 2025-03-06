type Pizza = {
  id: number;
  name: string;
  price: number;
};
type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

let nextPizzaId: number = 1;
let nextOrderId: number = 1;
let cashInRegister: number = 100;

let menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
];

let orderHistory: Order[] = [];

function addNewPizza(pizzaDetails: Omit<Pizza, "id">): Pizza {
  // spread the pizza details into pizzaObj
  let pizzaObj: Pizza = { id: nextPizzaId++, ...pizzaDetails };
  menu.push(pizzaObj);
  return pizzaObj;
}

function placeOrder(pizzaName: string): Order | undefined {
  const selectedPizza: Pizza | undefined = menu.find(
    (pizzaObj) => pizzaObj.name === pizzaName,
  );
  if (!selectedPizza) {
    throw new Error(`Pizza ${pizzaName} not found`);
  }
  cashInRegister += selectedPizza.price;
  let newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderHistory.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number): Order {
  let selectedOrder: Order | undefined = orderHistory.find(
    (orderObj) => orderObj.id === orderId,
  );
  if (!selectedOrder) {
    throw new Error(`Order ${orderId} not found`);
  }
  selectedOrder.status = "completed";
  return selectedOrder;
}

// identifier should either be the id or name of the pizza
// export keyword lets other modules import this function
export function getPizzaDetail(identifier: number | string): Pizza | undefined {
  if (typeof identifier === "number") {
    return menu.find((pizzaObj) => pizzaObj.id === identifier);
  } else if (typeof identifier === "string") {
    return menu.find(
      (pizzaObj) => pizzaObj.name.toLowerCase() === identifier.toLowerCase(),
    );
  } else {
    throw new TypeError("Parameter `identifier` must be a number or string");
  }
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderHistory);
