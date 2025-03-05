var menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];
var nextOrder = 1;
var cashInRegister = 100;
var orderQueue = [];
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
    if (!selectedPizza) {
        console.error("Pizza ".concat(pizzaName, " not found"));
        return;
    }
    cashInRegister += selectedPizza.price;
    var newOrder = { pizza: selectedPizza, status: "ordered", id: nextOrder };
    nextOrder++;
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    var selectedOrder = orderQueue.find(function (orderObj) { return orderObj.id === orderId; });
    if (!selectedOrder) {
        console.error("Order ".concat(orderId, " not found"));
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
