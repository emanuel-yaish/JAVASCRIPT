// Please make the following changes to the html file while navigating the DOM.
// Create a variable that holds the <li> element with the class “start-here”.
const startHere = document.querySelector(".start-here");

// Use traverse methods to complete these tasks:
// 1. Change the text from “title 2” to “main title”
const outerUl = document.querySelector("ul");
outerUl.children[1].textContent = "main title";

// 2. Add another sub title with the text “sub title 4”
const subTitle4 = document.createElement("li");
subTitle4.textContent = "sub title 4";
outerUl.querySelector("ul").append(subTitle4);

// 3. Delete the last <li> element from the list.
outerUl.removeChild(outerUl.lastElementChild);

// 4. Change the <title> element text to “Master Of The Dom”.
document.title = "Master Of The Dom";

// 5. Change the text of the <p> element ot something else of your
outerUl.nextElementSibling.firstElementChild.textContent = "change by traverse";
