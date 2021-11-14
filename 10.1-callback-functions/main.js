// 1. Write a a function called ‘isString’ that receives 2
// arguments, a string and a callback function.
// The function checks that the string is indeed a string.
// If the string is a string, pass the string to a callback
// function which logs that string to the console.
function isString(str, func) {
  if (typeof str === "string") func(str);
}

function logStr(str) {
  console.log("function logStr: ", str);
}

isString("my callback", logStr);

// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.
function createDashes(str) {
  return str.replace(/\s+/g, "-");
}

function firstWordUpperCase(str, func) {
  //   str = str.charAt(0).toUpperCase() + str.slice(1);
  const arr = str.split(" ");
  arr[0] = arr[0].toUpperCase();
  str = arr.join(" ");

  return func(str);
}

console.log(
  "with dash: ",
  firstWordUpperCase("upper case callback", createDashes)
);

// 3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice.
firstWordUpperCase("upper case callback", logStr);

// 4. Create your own function that will receive from one of its
// arguments a callback function.

function upperString(str) {
  console.log("upper case function:", str.toUpperCase());
}

firstWordUpperCase("upper case callback", upperString);
