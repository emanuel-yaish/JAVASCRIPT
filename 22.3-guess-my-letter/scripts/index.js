const keyGuessedElement = document.querySelector(".keys-guessed");
const userMessage = document.querySelector(".user-message");
const playAgain = document.querySelector(".play-again");
const letterContainer = document.querySelector(".my-letter");

const characters = "abcdefghijklmnopqrstuvwxyz";
let letters = [];
let randomLetter;

function initGame() {
  document.body.addEventListener("keypress", guessAtempt);
  randomLetter = characters.charAt(
    Math.floor(Math.random() * characters.length)
  );
  letters = [];
  keyGuessedElement.textContent = "";
  userMessage.classList.toggle("red");
  userMessage.textContent = "";
  letterContainer.textContent = "?";
  playAgain.style.display = "none";
}

initGame();

function guessAtempt(e) {
  const userInputGuess = e.key.toLocaleLowerCase();
  console.log("guess", userInputGuess);
  if (!characters.includes(userInputGuess)) {
    userMessage.textContent = "invalid letter try other letter";
    return;
  }

  if (userInputGuess === randomLetter) {
    userMessage.textContent = "right letter";
    userMessage.classList.toggle("red");
    playAgain.style.display = "block";
    letterContainer.textContent = randomLetter;
    document.body.removeEventListener("keypress", guessAtempt);
    return;
  }

  if (letters.includes(userInputGuess)) {
    userMessage.textContent = `${userInputGuess} has already been guessed!`;
    return;
  }

  userMessage.textContent = "Nope, wrong letter";
  letters.push(userInputGuess);
  keyGuessedElement.textContent = letters.join(",");
}

playAgain.addEventListener("click", () => {
  initGame();
});
