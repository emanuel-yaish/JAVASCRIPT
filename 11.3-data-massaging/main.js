const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

// 1. Create a function that returns all the names from the array.
function allNames(data) {
  return data.map((item) => item.name);
}

console.log(allNames(data));

// 2. Create a function that returns all the objects that are born before 1990.
function bornBefore1990(data) {
  const bornBeforeArr = [];
  data.forEach((item) => {
    const birthdayArr = item.birthday.split("-");
    if (birthdayArr[2] < 1990) bornBeforeArr.push(item);
  });

  return bornBeforeArr;
}

console.log(bornBefore1990(data));

// 3. Create a function that returns an object of all the different foods from all
// the objects as the key and the number of times that food is present in all the
// objects as the value.

function differentFoods(data) {
  const differentFoodObj = {};

  let foodArr = [];
  data.forEach((element) => {
    foodArr = [
      ...foodArr,
      ...element.favoriteFoods.meats,
      ...element.favoriteFoods.fish,
    ];
  });

  foodArr.forEach((element) => {
    differentFoodObj[element]
      ? differentFoodObj[element]++
      : (differentFoodObj[element] = 1);
  });

  return differentFoodObj;
}

console.log(differentFoods(data));
