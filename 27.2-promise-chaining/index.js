const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    const res = array.map((word) => {
      if (typeof word !== "string") {
        return reject("Error - array should contains anything but strings");
      }
      return (result = word.toUpperCase());
    });

    resolve(res);
  });
};

const sortWords = (array) => {
  return new Promise((resolve, reject) => {
    const sortedArray = array.sort();
    resolve(sortedArray);
  });
};

function capitilizeAndSort(array) {
  makeAllCaps(array)
    .then(sortWords)
    .then((sortedArray) => console.log(sortedArray))
    .catch((error) => console.log("catch", error));
}

let array = ["this", "sentence", "is", "going", "to", "be", "sorted"];
capitilizeAndSort(array);

array = ["this", "sentence", "is", "going", "to", "be", "sorted", "hey", 2, 3];
capitilizeAndSort(array);
