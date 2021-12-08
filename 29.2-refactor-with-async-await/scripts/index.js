const titleElement = document.querySelector(".joke-title");
const jokeElement = document.querySelector(".joke");
const buttonElement = document.querySelector(".joke-button");

buttonElement.addEventListener("click", generateJoke);

async function generateJoke() {
  try {
    const data = await (await fetch("https://api.jokes.one/jod")).json();
    console.log("Success:", data.contents.jokes[0]);
    titleElement.textContent = data.contents.jokes[0].joke.title;
    jokeElement.textContent = data.contents.jokes[0].joke.text;
  } catch (error) {
    console.error("Error:", error);
  }
}
