// Create a function that receives 1 argument, an object and returns a new
// object with the properties and values swapped.
const objToSwap = {
  firtName: "Emanuel",
  lastName: "yaish",
  objProperty: "objvalue",
};

function swapKeyAndValues(objToSwap) {
  const keysArr = Object.keys(objToSwap);
  const valuesArr = Object.values(objToSwap);
  const swapObj = {};

  for (let index = 0; index < keysArr.length; index++) {
    swapObj[valuesArr[index]] = keysArr[index];
  }
  return swapObj;
}

const swapObj = swapKeyAndValues(objToSwap);
console.log(swapObj);

function swapKeyAndValuesForIn(objToSwap) {
  const swapObj = {};

  for (const key in objToSwap) {
    swapObj[objToSwap[key]] = key;
  }
  return swapObj;
}

const swapObjForIn = swapKeyAndValuesForIn(objToSwap);
console.log(swapObjForIn);
