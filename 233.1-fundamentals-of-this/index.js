// Answer the following questions:
// Question 1:
// In your own words what will this point to and why?(Note
// this is the global scope)
console.log(this);

// when we are in the global this refer to window on browser therefore outside of all object it refer to window

// Question 2:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
const myObj = {
  name: "Timmy",
  greet: () => {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();

// refer to global/window because arrow function dont have this key word
//to fix:

const myObjFixed = {
  name: "Timmy",
  greet() {
    console.log(`Hello ${this.name}`);
  },
};
myObjFixed.greet();

// Question 3:
// In your own words what will this point to and why?
const myFuncDec = function () {
  console.log(this);
};

// refer to global because it called from a function that outside of object

// Question 4:
// In your own words what will this point to and why?
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();

// this refer to the global/window because arrow function don't have this

// Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
document.querySelector(".element").addEventListener(() => {
  console.log(this);
});

// the actual event is missing , the even should be click
//  fix:
document.querySelector(".element").addEventListener("click", () => {
  console.log(this);
});
