const chaii = {
  name: "Masala chaii",
  price: 20,
  isHot: true,
};

//behind the scene
// ts behind the scence always infer
// {
//   name: string;
//   price: number;
//   isHot: boolean;
// }

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};
tea = {
  name: "Masala tea",
  price: 20,
  isHot: true,
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[]; //string array
};
const adrakChaii: Tea = {
  name: "Adrak chaii",
  price: 25,
  ingredients: ["ginger", "milk", "water"],
};

type Cup = {
  size: string;
};
let smallCup: Cup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup;

type Brew = {
  brewTime: number;
};
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiiBrew: Brew = coffee;

type User = {
  username: string;
  password: string;
};
const u: User = {
  username: "Chaiicode",
  password: "123",
};

//spilit out datatypes
type Item = {
  name: string;
  quality: number;
};

type Address = {
  street: string;
  pin: number;
};

type Order = {
  id: string;
  items: Item[];
  address: Address[];
};
//partially update datatypes
type Chaii = {
  name: string;
  price: number;
  isHot: boolean;
};
const updatedChaii = (updates: Partial<Chaii>) => {
  console.log(`Updating chaii with ${updates}`);
};
updatedChaii({ price: 25 });
updatedChaii({ isHot: true });
updatedChaii({}); //we can pass an empty object which may sometimes cause problem.

//required update datatypes
type ChaiiOrder = {
  name?: string;
  quantity?: number;
};
const placeOrder = (order: Required<ChaiiOrder>) => {
  console.log(order);
};
placeOrder({ name: "Masala chaii", quantity: 1 });
