const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

function mutualItems(arr1, arr2) {
  const mutualWords = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) mutualWords.push(arr2[j]);
    }
  }

  if (mutualWords.length === 0) return false;

  return mutualWords;
}

console.log(mutualItems(food, food1));
