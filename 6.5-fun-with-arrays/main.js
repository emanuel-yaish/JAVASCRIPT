// 1. Fill an array with 100 of a same object using array fill
// method.
const myObj = {
  firstName: "emanuel",
  lastName: "Yaish",
};

const myArr = ["emanuel", "yaish"];

const sameOneHundredObj = Array(100).fill(myObj, 0, 100);
console.log(sameOneHundredObj);

// 2. Create an array with numbers ranging from 1-100 using
// the Array.from method.
const numbersRangingArr = Array.from(Array(100), (_, index) => index + 1);
console.log(numbersRangingArr);

// 3. Convert only values of an object into one array.
const objToArray = Object.values(myObj);
console.log(objToArray);

// 4. Convert an array into one object.
const objectFromArray = Object.assign({}, myArr);
console.log(objectFromArray);

// 5. Find out if an array is an array.
console.log(Array.isArray(objToArray));
console.log(Array.isArray(objectFromArray));

// 6. Copy an array.
// • Create a copy of an array that won’t effect the original
// array if modified.
const newArry = myArr.slice();
console.log(newArry);
console.log(myArr);
newArry[0] = "itzhak";
console.log(newArry);
console.log(myArr);
// • Create a copy of an array that will effect the original
// array if modified.
const sameArray = myArr;
console.log(sameArray);
console.log(myArr);
sameArray[0] = "itzhak";
console.log(sameArray);
console.log(myArr);
