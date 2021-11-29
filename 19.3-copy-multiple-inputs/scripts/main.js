// Data
const password = ["1", "2", "3", "4", "5", "6"];
const inputArr = [...document.querySelectorAll("input[type=text]")];
const allInput = document.querySelectorAll("input[type=text]");
let firstEmpty;

// Elements
const verifyBtn = document.querySelector(".verify-btn");
const verifyMessage = document.querySelector(".verify-message");
const varifyContainer = document.querySelector(".varify-container");

// functinos
function focusNextItem(currentElement) {
  const currentElementIndex = parseInt(currentElement.dataset.index);
  if (currentElementIndex === 5) checkValidation();
  if (currentElementIndex < 0 || currentElementIndex >= 5) return;
  allInput[+currentElementIndex + 1].focus();
}

function checkValidation() {
  let misMatch = false;
  for (let index = 0; index < inputArr.length && misMatch === false; index++) {
    if (inputArr[index].value !== password[index]) misMatch = true;
  }
  if (misMatch) verifyMessage.textContent = "Invalid Code";
  else verifyMessage.textContent = "code verified";
}

// evenets listeners
verifyBtn.addEventListener("click", checkValidation);

// focus onclick inside paswword area
varifyContainer.addEventListener("click", (e) => {
  console.log(e.target.tagName);
  if (e.target.tagName === "INPUT") return;
  firstEmpty = inputArr.find((input) => input.value === "");
  if (firstEmpty !== undefined) firstEmpty.focus();
});

inputArr.forEach((input) => {
  input.addEventListener("paste", (event) => {
    let paste = (event.clipboardData || window.clipboardData).getData("text");
    pasteArr = paste.split("");
    for (
      inputArrIndex = input.dataset.index, pasteArrIndex = 0;
      inputArrIndex < inputArr.length && pasteArrIndex < pasteArr.length;
      inputArrIndex++, pasteArrIndex++
    ) {
      inputArr[inputArrIndex].value = pasteArr[pasteArrIndex];
    }

    checkValidation();

    //   const selection = window.getSelection();
    //   if (!selection.rangeCount) return false;
    //   selection.deleteFromDocument();
    //   selection.getRangeAt(0).insertNode(document.createTextNode(paste));

    event.preventDefault();
  });
});

// user
document.body.addEventListener("keyup", (e) => {
  if (e.key === "Tab") return;

  const activeElement = document.activeElement;

  // focus not exist
  if (activeElement.tagName !== "INPUT") {
    const firstEmpty = inputArr.find((input) => input.value === "");
    if (firstEmpty !== undefined) firstEmpty.focus();
    return;
  }

  // focus exist and backspace
  if (e.key === "Backspace") return;

  // focus next item
  focusNextItem(activeElement);
});

// code
