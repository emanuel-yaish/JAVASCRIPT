// Block 1

var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9); // b = 5 return function other function
var result = firstResult(2); // return 5 b = 5, from the execute someFunction(9) b will change to 5
console.log(result);

// Block 2

var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2(); // a changed to function and after that change to 10 and return
console.log(a); //  10 -> b2(); change a to 10

// Block 3
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100); //3 time 3 because i defiend in the global when console.log exectute i is 3
  //and he not take it from the loop because he exist at the main * I thouht it will be undefined because it only change inside the loop
}
