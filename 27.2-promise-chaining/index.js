const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    const res = array.map((word) => {
      console.log("start of map");

      if (typeof word !== "string") {
        console.log("if reject");
        reject("Error - array should contains anything but strings");
        console.log("after reject");
      }
      console.log("outside if");
      // throw new Error("My error");
      try {
        const result = word.toUpperCase();
        return result;
      } catch (error) {
        console.log("We are in catch");
      }

      return "a";
    });
    throw new Error("My error");
    console.log("We are resolving");
    resolve(res);
  });
};

const sortWords = (array) => {
  return new Promise((resolve, reject) => {
    const sortedArray = array.sort();
    resolve(sortedArray);
  });
};

const array = ["hey", 2, 3, 4, 5];

makeAllCaps(array)
  .then(sortWords)
  .then((value) => console.log(value))
  .catch((error) => console.log("catch", error));
// console.log("sortedArray", sortedArray);

// console.log(sortedArray);
