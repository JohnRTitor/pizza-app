let menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let nextOrder = 1;
let cashInRegister = 100;
let orderQueue = [];

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName: string) {
  let selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    console.error(`Pizza ${pizzaName} not found`);
    return;
  }
  cashInRegister += selectedPizza.price;
  let newOrder = { pizza: selectedPizza, status: "ordered", id: nextOrder };
  nextOrder++;
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number) {
  let selectedOrder = orderQueue.find((orderObj) => orderObj.id === orderId);
  if (!selectedOrder) {
    console.error(`Order ${orderId} not found`);
    return;
  }
  selectedOrder.status = "completed";
  return selectedOrder;
}

addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 });
addNewPizza({ name: "BBQ Chicken", cost: 12 });
addNewPizza({ name: "Spicy Sausage", cost: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
