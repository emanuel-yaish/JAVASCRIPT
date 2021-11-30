keyGuessedElement = document.querySelector(".keys-guessed");
userMessage = document.querySelector(".user-message");

const letters = [];
let characters = "abcdefghijklmnopqrstuvwxyz";
let randomLetter = characters.charAt(
  Math.floor(Math.random() * characters.length)
);
console.log("random", randomLetter);

document.body.addEventListener("keypress", (e) => {
  const userInputGuess = e.key.toLocaleLowerCase();
  console.log("guess", userInputGuess);
  if (!characters.includes(userInputGuess)) {
    userMessage.textContent = "invalid letter try other letter";
    return;
  }

  console.log(userInputGuess);
  console.log(randomLetter);

  if (userInputGuess === randomLetter) {
    userMessage.textContent = "right letter";
    return;
  }

  if (letters.includes(userInputGuess)) {
    userMessage.textContent = `${userInputGuess} has already been guessed!`;
    return;
  }

  userMessage.textContent = "Nope, wrong letter";
  letters.push(userInputGuess);
  keyGuessedElement.textContent = letters.join(",");
});

function resetGame() {}
// modalAccept.addEventListener("click", () => {
//   modalUserValues.textContent = "succsess";
//   modaldecline.value = "close";
//   modalAccept.style.display = "none";
// });

// modaldecline.addEventListener("click", () => {
//   modal.style.display = "none";
// });

// for (let input of [userName, userAge, userEmail])
//   input.addEventListener("change", ({ target }) => {
//     console.log(target.value);
//     const { name, value } = target;
//     console.log(value);
//     formData[name] = value;
//   });

// buttonElement.addEventListener("click", ({ target }) => {
//   {
//     modalEmail.textContent = formData["email"];
//     modalAge.textContent = formData["age"];
//     modalname.textContent = formData["user-name"];
//     modal.style.display = "flex";
//   }
// });
