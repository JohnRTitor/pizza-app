type Pizza = {
  name: string;
  price: number;
};
type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

let menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let nextOrderId = 1;
let cashInRegister = 100;
let orderHistory: Order[] = [];

function addNewPizza(pizzaObj: Pizza) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName: string) {
  let selectedPizza: Pizza = menu.find(
    (pizzaObj) => pizzaObj.name === pizzaName,
  );
  if (!selectedPizza) {
    console.error(`Pizza ${pizzaName} not found`);
    return;
  }
  cashInRegister += selectedPizza.price;
  let newOrder: Order = {
    id: nextOrderId,
    pizza: selectedPizza,
    status: "ordered",
  };
  nextOrderId++;
  orderHistory.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number) {
  let selectedOrder = orderHistory.find((orderObj) => orderObj.id === orderId);
  if (!selectedOrder) {
    console.error(`Order ${orderId} not found`);
    return;
  }
  selectedOrder.status = "completed";
  return selectedOrder;
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderHistory);
