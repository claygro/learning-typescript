"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//this is type narrowing
// type narrowing guarrentee that which data type value will be return
function orderRedBull(canColor) {
    if (canColor === "orange") {
        return `Red Bull can color will be ${canColor}`;
    }
    else if (canColor === "blue") {
        return `Red bull can color will be ${canColor}`;
    }
    else {
        return `Red bull can color will be ${canColor}`;
    }
}
console.log(orderRedBull("red"));
function makeChaii(order) {
    switch (order.type) {
        case "masala":
            console.log(`${order.type} chaii with spice level ${order.spiceLevel}`);
            break;
        case "elaichi":
            console.log(`${order.type} chaii`);
            break;
        case "ginger":
            console.log(`${order.type} chaii`);
            break;
    }
}
makeChaii({
    type: "ginger",
    amount: 10,
});
//# sourceMappingURL=typeNarrowingAndTypeGuard.js.map