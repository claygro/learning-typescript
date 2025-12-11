//union
let orders = ["momo", "chowmean", "burger"];
let currentOrders: string | undefined;
for (let order of orders) {
  if (order == "momo") {
    currentOrders = order;
    break;
  }
}
console.log(currentOrders);
