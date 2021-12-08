const titleElement = document.querySelector(".joke-title");
const jokeElement = document.querySelector(".joke");
const buttonElement = document.querySelector(".joke-button");

console.log("button", buttonElement);

buttonElement.addEventListener("click", generateJoke);

function generateJoke() {
  fetch("https://api.jokes.one/jod")
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data.contents.jokes[0]);
      titleElement.textContent = data.contents.jokes[0].joke.title;
      jokeElement.textContent = data.contents.jokes[0].joke.text;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
