import { menuItems } from "./menu";

export const bestSellers = menuItems.filter((item) =>
  [
    "truffle-chicken-plate",
    "ember-burger",
    "chili-garlic-pasta",
    "firecracker-chicken-rice",
    "truffle-fries",
    "burnt-cheesecake",
  ].includes(item.id),
);
