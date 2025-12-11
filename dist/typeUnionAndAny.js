"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//union
let orders = ["momo", "chowmean", "burger"];
let currentOrders;
for (let order of orders) {
    if (order == "momo") {
        currentOrders = order;
        break;
    }
}
console.log(currentOrders);
//# sourceMappingURL=typeUnionAndAny.js.map