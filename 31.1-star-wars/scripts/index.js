// character = {
//   name,
//   height,
//   hairColor,
//   Planet,
//   planetPopulation,
// };

async function getCharacters() {
  try {
    const data = await (await fetch("https://swapi.dev/api/films/1")).json();
    console.log("Success:", data.characters);
    const charactersApiArray = [];
    for (let index = 0; index < 10; index++) {
      charactersApiArray.push(
        await (await fetch(data.characters[index])).json()
      );
    }
    console.log(charactersApiArray);
    const characters = Promise.all(charactersApiArray);
    console.log(characters);
    // characters.forEach((character) => {
    //   console.log(character);
    // });
    console.log("Success:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getCharacters();

// const titleElement = document.querySelector(".joke-title");
// const jokeElement = document.querySelector(".joke");
// const buttonElement = document.querySelector(".joke-button");

// buttonElement.addEventListener("click", generateJoke);

// async function generateJoke() {
//   try {
//     const data = await (await fetch("https://api.jokes.one/jod")).json();
//     console.log("Success:", data.contents.jokes[0]);
//     titleElement.textContent = data.contents.jokes[0].joke.title;
//     jokeElement.textContent = data.contents.jokes[0].joke.text;
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
