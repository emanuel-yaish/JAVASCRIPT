const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

//The function should return the candy element with the specified id.

function getCandy(candyStore, id) {
  return candyStore.candies.find((cndy) => cndy.id === id);
}

console.log(getCandy(candyStore, "5hd7y"));

// The function should return the price (number) of the candy with the specified id.

function getPrice(candyStore, id) {
  const candy = getCandy(candyStore, id);
  return candy.price;
}

console.log(getPrice(candyStore, "5hd7y"));

// The function should add a new candy to the candy list in candyStore with a default amount of 1.
// The function will not return anything.

function addCandy(candyStore, id, name, price) {
  candyStore.candies.push({
    name,
    id,
    price,
    amount: "1",
  });
}

addCandy(candyStore, "5h3dy", "Pesekzman", 5);

console.log(candyStore);

// The function should add the candy price to the cashRegister,
// and decrease the amount property of the relevant candy.

function buy(candyStore, id) {
  const candy = getCandy(candyStore, id);
  candy.amount--;
  candyStore.cashRegister += candy.price;
}

buy(candyStore, "5hd7y");

console.log(candyStore);
