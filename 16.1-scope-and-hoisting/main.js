// Block 1

function funcA() {
  // hoisting row 7 to var a; (undefined)
  console.log(a); // undefined
  console.log(foo()); // 2
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();
// undefined
// 2

// Block 2

var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName()); //  'Colin Ihrig'
var test = obj.prop.getFullName; // undefined
console.log(test()); //this refer to global

// Block 3

function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
console.log(typeof a); // undefined
console.log(typeof b); // number -> b is global

// Block 4

function funcC() {
  console.log("1");
}
funcC(); // 2 -> funcC(2) -> hoisted and replace funcC(1)
function funcC() {
  console.log("2");
}
funcC(); //2

// Block 5

function funcD1() {
  d = 1;
}
funcD1();
console.log(d); //1 d is global
function funcD2() {
  var e = 1;
}
funcD2();
// console.log(e); // undefined e is var that function scope not defined outside funcD2 // get Error after i checked

// Block 6

function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f); // undefined -> by hoisting f
var f = 1;
funcE(); // 1 is recognized inside the function
