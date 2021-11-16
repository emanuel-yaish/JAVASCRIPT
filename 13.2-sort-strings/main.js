const foods = ["falafel", "sabich", "hummus", "pizza with extrapineapple"];

console.log(foods.sort((a, b) => (a < b ? -1 : 1)));

console.log(foods.sort((a, b) => (a > b ? -1 : 1)));

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

console.log(
  foodsWithUpperCase.sort((a, b) =>
    a.toLowerCase() < b.toLowerCase() ? -1 : 1
  )
);

console.log(
  foodsWithUpperCase.sort((a, b) =>
    a.toLowerCase() > b.toLowerCase() ? -1 : 1
  )
);

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

console.log(words.sort((a, b) => (a.length > b.length ? -1 : 1)));
