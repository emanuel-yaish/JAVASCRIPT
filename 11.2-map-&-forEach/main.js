// 1. Write a function called doubleValues which accepts an
// array of integers and returns a new array with all the
// values in the array passed to the function doubled.

function doubleValues(arr) {
  numOfTimes = {};
  doubleValuesArr = [];

  arr.forEach((num) => {
    if (numOfTimes[num]) {
      numOfTimes[num]++;
      if (numOfTimes[num] === 2) doubleValuesArr.push(num);
    } else numOfTimes[num] = 1;
  });

  return doubleValuesArr;
}

const doubleArr = [1, 1, 2, 3, 4, 5, 6, 7, 4, 7, 8, 5];
console.log(doubleValues(doubleArr));

// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.
function onlyEvenValues(arr) {
  evenArr = [];
  arr.forEach((num) => {
    if (num % 2 === 0) evenArr.push(num);
  });

  return evenArr;
}

console.log(onlyEvenValues(doubleArr));

// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements that
// are strings.
function showFirstAndLast(arr) {
  firstAndLast = [];

  arr.forEach((element) => {
    if (typeof element === "string")
      if (element.length === 1) firstAndLast.push(element);
      else
        firstAndLast.push(
          element.charAt(0) + element.charAt(element.length - 1)
        );
  });

  return firstAndLast;
}

const firstAndLastTest = ["abc", 2, 1, "a", "ee", "work"];

console.log(showFirstAndLast(firstAndLastTest));

// 4. Write a function called vowelCount which accepts a
// string as an argument. The function should return an object
// which has the count of the number of vowel’s that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}.
// Should not be case sensitive.

function vowelCount(str) {
  vowelObj = {};
  vowelArr = ["a", "e", "i", "o", "u"];
  letters = str.toLowerCase().split("");

  letters.forEach((letter) => {
    if (vowelArr.includes(letter))
      vowelObj[letter] ? vowelObj[letter]++ : (vowelObj[letter] = 1);
  });

  return vowelObj;
}

console.log(vowelCount("this is a nice sentence to check how many VOWELS"));

// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.
function capitalize(str) {
  const words = str.split(" ");
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalize("this is nice sentence to be capitilize"));
// 6. Write a function called shiftLetters that takes a string as
// an argument and return’s an encoded string with each
// letter shifted down the alphabet by one.
function shiftLetters(str) {
  const letters = str.split("");
  return letters
    .map((letter) => {
      if (letter.charCodeAt(0) === " ".charCodeAt(0)) return " ";
      if (letter.charCodeAt(0) === "a".charCodeAt(0)) return "z";
      if (letter.charCodeAt(0) === "A".charCodeAt(0)) return "Z";

      return String.fromCharCode(letter.charCodeAt(0) - 1);
    })
    .join("");
}

console.log(shiftLetters("abc egg"));

// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)
function swapCase(str) {
  const words = str.split(" ");

  return words
    .map((word, index) => (index % 2 === 0 ? capitalize(word) : word))
    .join(" ");
}

console.log(
  swapCase("this is a nice string that will be capitialized every second word")
);
