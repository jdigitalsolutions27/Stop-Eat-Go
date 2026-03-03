import { IMAGES } from "@/lib/constants";

export type MenuCategory =
  | "Best Sellers"
  | "Rice Meals"
  | "Burgers & Sandwiches"
  | "Pasta & Noodles"
  | "Snacks & Sides"
  | "Drinks"
  | "Desserts";

export type MenuTag = "Spicy" | "Best Seller" | "New" | "Budget";

export type MenuItem = {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  description: string;
  image: string;
  tags: MenuTag[];
  dietary?: string[];
};

export const menuCategories: MenuCategory[] = [
  "Best Sellers",
  "Rice Meals",
  "Burgers & Sandwiches",
  "Pasta & Noodles",
  "Snacks & Sides",
  "Drinks",
  "Desserts",
];

export const menuItems: MenuItem[] = [
  {
    id: "truffle-chicken-plate",
    name: "Truffle Chicken Plate",
    category: "Best Sellers",
    price: 365,
    description: "Crisp chicken thigh, truffle jus, garlic rice, pickled slaw.",
    image: IMAGES.dish1,
    tags: ["Best Seller"],
    dietary: ["High Protein"],
  },
  {
    id: "ember-burger",
    name: "Ember House Burger",
    category: "Best Sellers",
    price: 395,
    description: "Double beef patties, smoked cheddar, caramelized onion, brioche bun.",
    image: IMAGES.dish4,
    tags: ["Best Seller"],
    dietary: ["Chef Pick"],
  },
  {
    id: "chili-garlic-pasta",
    name: "Chili Garlic Cream Pasta",
    category: "Best Sellers",
    price: 345,
    description: "Silky cream sauce with roasted garlic, chili flakes, parmesan.",
    image: IMAGES.dish6,
    tags: ["Best Seller", "Spicy"],
    dietary: ["Vegetarian Option"],
  },
  {
    id: "pepper-steak-rice",
    name: "Pepper Steak Rice Bowl",
    category: "Rice Meals",
    price: 410,
    description: "Sliced beef, black pepper glaze, soft egg, scallion rice.",
    image: IMAGES.dish2,
    tags: ["New"],
    dietary: ["Savory"],
  },
  {
    id: "crispy-adobo-rice",
    name: "Crispy Adobo Rice",
    category: "Rice Meals",
    price: 330,
    description: "Pork adobo flakes, garlic confit, achara, sunny-side egg.",
    image: IMAGES.dish5,
    tags: ["Budget"],
    dietary: ["Local Favorite"],
  },
  {
    id: "firecracker-chicken-rice",
    name: "Firecracker Chicken Rice",
    category: "Rice Meals",
    price: 350,
    description: "Sweet heat glaze, sesame greens, steamed jasmine rice.",
    image: IMAGES.dish1,
    tags: ["Spicy", "Best Seller"],
    dietary: ["Crowd Favorite"],
  },
  {
    id: "steakhouse-sandwich",
    name: "Steakhouse Sandwich",
    category: "Burgers & Sandwiches",
    price: 360,
    description: "Shaved beef, provolone, pepper aioli, toasted milk bread.",
    image: IMAGES.dish4,
    tags: ["New"],
    dietary: ["Hearty"],
  },
  {
    id: "golden-fried-chicken-burger",
    name: "Golden Fried Chicken Burger",
    category: "Burgers & Sandwiches",
    price: 320,
    description: "Crunchy chicken fillet, honey mustard slaw, buttered bun.",
    image: IMAGES.dish3,
    tags: ["Best Seller"],
    dietary: ["Crunchy"],
  },
  {
    id: "triple-cheese-melt",
    name: "Triple Cheese Melt",
    category: "Burgers & Sandwiches",
    price: 285,
    description: "Mozzarella, cheddar, gouda, tomato relish, fries on the side.",
    image: IMAGES.dish4,
    tags: ["Budget"],
    dietary: ["Vegetarian"],
  },
  {
    id: "smoked-bacon-carbonara",
    name: "Smoked Bacon Carbonara",
    category: "Pasta & Noodles",
    price: 365,
    description: "Creamy egg sauce, crisp bacon, pecorino, cracked pepper.",
    image: IMAGES.dish6,
    tags: ["Best Seller"],
    dietary: ["Rich"],
  },
  {
    id: "gochujang-beef-noodles",
    name: "Gochujang Beef Noodles",
    category: "Pasta & Noodles",
    price: 375,
    description: "Chewy noodles, charred beef, soy glaze, sesame crunch.",
    image: IMAGES.dish2,
    tags: ["Spicy", "New"],
    dietary: ["Umami"],
  },
  {
    id: "roasted-tomato-linguine",
    name: "Roasted Tomato Linguine",
    category: "Pasta & Noodles",
    price: 310,
    description: "Sweet roasted tomato sauce, basil oil, toasted breadcrumbs.",
    image: IMAGES.dish6,
    tags: ["Budget"],
    dietary: ["Vegetarian"],
  },
  {
    id: "truffle-fries",
    name: "Truffle Fries",
    category: "Snacks & Sides",
    price: 175,
    description: "Shoestring fries, truffle dust, parmesan, parsley.",
    image: IMAGES.dish3,
    tags: ["Best Seller"],
    dietary: ["Sharable"],
  },
  {
    id: "crispy-calamari",
    name: "Crispy Calamari",
    category: "Snacks & Sides",
    price: 245,
    description: "Tender squid rings, lemon aioli, smoked paprika.",
    image: IMAGES.dish5,
    tags: ["New"],
    dietary: ["Seafood"],
  },
  {
    id: "loaded-potato-bites",
    name: "Loaded Potato Bites",
    category: "Snacks & Sides",
    price: 190,
    description: "Crisp potato rounds, cheese sauce, bacon crumble, chives.",
    image: IMAGES.dish3,
    tags: ["Budget"],
    dietary: ["Sharable"],
  },
  {
    id: "salted-caramel-latte",
    name: "Salted Caramel Latte",
    category: "Drinks",
    price: 165,
    description: "Velvety espresso latte with house caramel and sea salt foam.",
    image: IMAGES.ambience1,
    tags: ["Best Seller"],
    dietary: ["Iced or Hot"],
  },
  {
    id: "citrus-sparkler",
    name: "Citrus Sparkler",
    category: "Drinks",
    price: 145,
    description: "Fresh calamansi, sparkling soda, mint, amber syrup.",
    image: IMAGES.ambience2,
    tags: ["New", "Budget"],
    dietary: ["Refreshing"],
  },
  {
    id: "dark-cocoa-shake",
    name: "Dark Cocoa Shake",
    category: "Drinks",
    price: 180,
    description: "Cold cocoa blend with espresso, vanilla bean, whipped cream.",
    image: IMAGES.ambience3,
    tags: ["Best Seller"],
    dietary: ["Dessert Drink"],
  },
  {
    id: "burnt-cheesecake",
    name: "Burnt Cheesecake Slice",
    category: "Desserts",
    price: 220,
    description: "Creamy Basque-style cheesecake finished with salted caramel.",
    image: IMAGES.dish5,
    tags: ["Best Seller"],
    dietary: ["Signature Dessert"],
  },
  {
    id: "molten-choco-cake",
    name: "Molten Choco Cake",
    category: "Desserts",
    price: 240,
    description: "Warm dark chocolate cake with soft center and vanilla cream.",
    image: IMAGES.dish1,
    tags: ["New"],
    dietary: ["Indulgent"],
  },
  {
    id: "banana-pudding-cup",
    name: "Banana Pudding Cup",
    category: "Desserts",
    price: 165,
    description: "Layered vanilla custard, caramelized banana, butter crumbs.",
    image: IMAGES.dish2,
    tags: ["Budget"],
    dietary: ["Light Finish"],
  },
];
