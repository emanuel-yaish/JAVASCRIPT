const arrA = [];
const arr = [1, 7, 3, 0, -5, 7, 3, 9];

// 1. Print with for loop all the number.
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}
// 2. Create functi “arrayLength” that return the array length (don’t use arr.length)
function arrayLength(arr) {
  let arrLength = 0;
  for (; arr.pop() !== undefined; arrLength++) {}
  return arrLength;
}

console.log(arrayLength(arr.slice()));
// 3. Create function “arraySum” , the function return the sum of all elements in array.
function arraySum(arr) {
  let arrSum = 0;
  for (let index = 0; index < arr.length; index++) {
    arrSum += arr[index];
  }
  return arrSum;
}
console.log(arraySum(arr));
// 4. Create function “arrayMulti” , the function return the multiplication of all the
// elements in array.
function arrayMulti() {
  let arrMulti = 0;
  for (let index = 0; index < arr.length; index++) {
    arrMulti *= arr[index];
  }
  return arrMulti;
}

console.log(arrayMulti(arr));
