import { IPlant } from "../designer/types";

const vegetables = [
  {
    category: "vegetable",
    bad_companions: ["potato", "sage", "mint", "melon"],
    good_companions: [
      "marigold",
      "bean",
      "corn",
      "pea",
      "tomato",
      "radish",
      "brussel sprout",
      "cauliflower",
      "cabbage",
      "chive",
      "garlic",
      "kale"
    ],
    id: 1,
    name: "Cucumber",
    varieties: []
  },
  {
    category: "vegetable",
    bad_companions: [],
    good_companions: ["cabbage", "lettuce", "leek", "radish", "pea", "onion"],
    id: 2,
    name: "Carrot",
    varieties: []
  },
  {
    category: "vegetable",
    bad_companions: ["walnut", "potato", "bean", "mustard"],
    good_companions: ["radish", "corn", "marigold", "oregano"],
    id: 3,
    name: "Watermelon",
    varieties: []
  },
  {
    category: "vegetable",
    bad_companions: [
      "cabbage",
      "cauliflower",
      "brussel sprout",
      "asparagus",
      "cantaloupe",
      "corn",
      "pumpkin",
      "watermelon"
    ],
    good_companions: [
      "beet",
      "celery",
      "cucumber",
      "dill",
      "garlic",
      "lettuce",
      "mint",
      "nasturtium",
      "onion",
      "potato",
      "rosemary",
      "sage",
      "spinach",
      "swiss",
      "chard"
    ],
    id: 4,
    name: "Broccoli",
    varieties: []
  },
  {
    category: "vegetable",
    bad_companions: [],
    good_companions: [
      "beetroot",
      "broccoli",
      "brussel sprout",
      "cabbage",
      "chamomile",
      "cauliflower",
      "carrot",
      "chinese",
      "cabbage",
      "kale",
      "kohlrabi",
      "lettuce",
      "peppers",
      "strawberry",
      "summer savory",
      "swiss chard",
      "tomato"
    ],
    id: 5,
    name: "Onion",
    varieties: []
  },
  {
    category: "vegetable",
    bad_companions: [
      "cabbage",
      "corn",
      "dill",
      "eggplant",
      "pepper",
      "potato",
      "fennel",
      "walnut"
    ],
    good_companions: [
      "borage",
      "chive",
      "marigold",
      "cabbage",
      "carrot",
      "basil",
      "carrot",
      "pepper",
      "sage",
      "onion",
      "garlic",
      "lettuce"
    ],
    id: 6,
    name: "Tomato",
    varieties: []
  },
  {
    category: "vegetable",
    bad_companions: [],
    good_companions: [
      "kale",
      "brussel sprout",
      "tomato",
      "broccoli",
      "spinach",
      "swiss chard"
    ],
    id: 7,
    name: "Cabbage",
    varieties: []
  },
  {
    category: "vegetable",
    bad_companions: [],
    good_companions: [
      "brussel sprout",
      "tomato",
      "broccoli",
      "cabbage",
      "swiss chard",
      "onion"
    ],
    id: 8,
    name: "Beetroot",
    varieties: []
  },
  {
    category: "vegetable",
    bad_companions: [],
    good_companions: ["corn", "bean", "squash", "pea", "cabbage"],
    id: 9,
    name: "Potato",
    varieties: []
  },
  {
    category: "vegetable",
    bad_companions: [],
    good_companions: [
      "spinach",
      "pea",
      "carrot",
      "parsnip",
      "lettuce",
      "cucumber"
    ],
    id: 11,
    name: "Radish",
    varieties: []
  },
  {
    category: "vegetable",
    bad_companions: [],
    good_companions: ["onion", "beetroot", "cabbage"],
    id: 12,
    name: "Swiss Chard",
    varieties: []
  },
  {
    category: "vegetable",
    bad_companions: [],
    good_companions: ["bean", "carrot", "turnip", "cucumber", "radish", "corn"],
    id: 13,
    name: "Pea",
    varieties: []
  },
  {
    category: "vegetable",
    bad_companions: [],
    good_companions: ["lettuce", "onion", "radish"],
    id: 14,
    name: "Parsnip",
    varieties: []
  },
  {
    category: "flower",
    bad_companions: [],
    good_companions: [],
    id: 15,
    name: "Marigold",
    varieties: []
  },
  {
    category: "fruit",
    bad_companions: [],
    good_companions: [],
    id: 16,
    name: "Pepper",
    varieties: []
  },
  {
    category: "vegetable",
    bad_companions: [],
    good_companions: [],
    id: 17,
    name: "Squash",
    varieties: []
  }
] as IPlant[];

export const plants = [...vegetables];
