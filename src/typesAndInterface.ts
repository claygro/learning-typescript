type ChaiiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChaii(order: ChaiiOrder) {
  console.log(order);
}
makeChaii({
  type: "normal",
  sugar: 2,
  strong: true,
});

interface TeaRecipe {
  water: number;
  milk: number;
}

class MasalaChaii implements TeaRecipe {
  water = 100;
  milk = 50;
}

interface CupSize {
  size: "small" | "large";
}

class Chaiis implements CupSize {
  size: "small" | "large" = "small";
}
const chaiiData = new Chaiis().size;
console.log(chaiiData);
//union type
type TeaType = "Masala" | "ginger" | "Lemon";
function orderChaii(tea: TeaType) {
  console.log(tea);
}

//intersection type
type BaseChai = { tealLeaves: number };
type Extra = { masala: number };
type MasalaChai = BaseChai & Extra;
const cup: MasalaChai = {
  tealLeaves: 2,
  masala: 1,
};
//optional value
type User = {
  username: string;
  bio?: string;
};

const u1: User = {
  username: "research",
};
const u2: User = {
  username: "research",
  bio: "Learning typescript",
};
//read only value
type Config = {
  readonly appName: string;
  version: number;
};
const cfg: Config = {
  appName: "True Nora",
  version: 1,
};

cfg.version = 2;
cfg.appName = "True Nora";
