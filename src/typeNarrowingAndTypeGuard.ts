//this is type narrowing
// type narrowing guarrentee that which data type value will be return
function orderRedBull(canColor: "orange" | "blue" | string) {
  if (canColor === "orange") {
    return `Red Bull can color will be ${canColor}`;
  } else if (canColor === "blue") {
    return `Red bull can color will be ${canColor}`;
  } else {
    return `Red bull can color will be ${canColor}`;
  }
}
console.log(orderRedBull("red"));

type MasalaChaii = { type: "masala"; spiceLevel: number };
type GingerChaii = { type: "ginger"; amount: number };
type ElaichiChaii = { type: "elaichi"; aroma: number };
type Chaii = MasalaChaii | GingerChaii | ElaichiChaii;
function makeChaii(order: Chaii) {
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
