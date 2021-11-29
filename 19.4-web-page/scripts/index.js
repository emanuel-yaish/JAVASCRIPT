// https://the-balloon-queen.webflow.io/

const navArr = ["ABOUT", "SERVICES", "BALLOONS", "INSTA", "GALLERY", "CONTACT"];

//  containers constrctor (div nav main ...)
function createContainerElement(elementType, classList) {
  const element = document.createElement(elementType);
  element.classList.add(classList);
  console.log(element);
  return element;
}

//  text elements constrctor (h1-h6 p span ...)
function createTextElemtnt(elementType, classList, elementTxt) {
  const element = document.createElement(elementType);
  element.classList.add(classList);
  element.textContent = elementTxt;
  return element;
}

//  href elements constrctor (a ...)
function createLinkElemtnt(elementType, classList, elementTxt, elementHref) {
  const element = document.createElement(elementType);
  element.classList.add(classList);
  element.textContent = elementTxt;
  element.href = elementHref;

  return element;
}

// images
function createImgElemtnt(elementType, classList, imgSrc, imgAlt) {
  const img = document.createElement(elementType);
  img.src = imgSrc;
  img.alt = imgAlt;
  img.classList.add(classList);
  return img;
}
//  create and append page container
const pageContainer = createContainerElement("div", "page-container");
document.body.append(pageContainer);

// create header
const ballonContainer = createContainerElement(
  "div",
  "headr-balloon-container"
);
const headerImg = document.createElement("img");
headerImg.src = "./assets/img/header_balloon.svg";
headerImg.alt = "balloon";
headerImg.classList.add("header-balloon");

// append header

pageContainer.append(ballonContainer);
ballonContainer.append(headerImg);

// create main nav
const mainNav = createContainerElement("nav", "main-nav");

// create and append nav links
navArr.forEach((navElementTxt) => {
  const navElement = createLinkElemtnt("a", "nav-item", navElementTxt, "#");
  mainNav.append(navElement);
});

// append  main nav
pageContainer.append(mainNav);

// main header
const mainHeader = createContainerElement("header", "main-header");
const headerBalloonContainer = createContainerElement(
  "div",
  "header-balloon-container"
);
const mainHeaderImg = createImgElemtnt(
  "img",
  "header-balloon-img",
  "./assets/img/ballons.png",
  "balloons"
);

headerBalloonContainer.append(mainHeaderImg);

const headerTitlesContainer = createContainerElement(
  "div",
  "header-titles-container"
);

const h1 = createTextElemtnt(
  "h1",
  "main-title",
  "High quality balloons at affordable prices"
);
const h2 = createTextElemtnt(
  "h2",
  "secondary-title",
  "Local customised balloons for any occasion"
);
const headerBtn = document.createElement("input");
headerBtn.type = "button";
headerBtn.classList.add("square-btn", "gray");
headerBtn.value = "FIND OUT MORE";

headerTitlesContainer.append(h1, h2, headerBtn);

// append main header
mainHeader.append(headerBalloonContainer);
mainHeader.append(headerTitlesContainer);
pageContainer.append(mainHeader);
