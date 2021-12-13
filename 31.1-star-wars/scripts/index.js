// character = {
//   name,
//   height,
//   hairColor,
//   Planet,
//   planetPopulation,
// };

async function getCharacters1() {
  try {
    const data = await (await fetch("https://swapi.dev/api/films/1")).json();
    console.log("Success:", data.characters);
    const charactersApiArray = [];
    for (let index = 0; index < 10; index++) {
      charactersApiArray.push(fetch(data.characters[index]));
    }
    console.log("charactersApiArray", charactersApiArray);
    const charactersPromise = await Promise.all(charactersApiArray);
    const charactersjsonPromiseArray = charactersPromise.map(
      (charcterPromise) => charcterPromise.json()
    );
    console.log(charactersjsonPromiseArray);
    const characters = await Promise.all(charactersjsonPromiseArray);

    console.log("Success:", characters);
  } catch (error) {
    console.error("Error:", error);
  }
}

getCharacters1();

// CODE WITH MORDI
async function getCharacters() {
  try {
    const data = await (await fetch("https://swapi.dev/api/films/1")).json();
    console.log("Success:", data.characters);
    // const charactersApiArray =

    // console.log(charactersApiArray);
    const responseArray = await Promise.all(
      data.characters.slice(0, 10).map((e) => fetch(e))
    );
    console.log("responseArray", responseArray);
    const jsonPromiseArray = responseArray.map((response) => response.json());
    console.log("jsonPromiseArray", jsonPromiseArray);

    const characters = await Promise.all(jsonPromiseArray);

    // const characters = await Promise.all(
    //   (
    //     await Promise.all(data.characters.slice(0, 10).map((e) => fetch(e)))
    //   ).json()
    // );
    console.log("characters", characters);
    // characters.forEach((character) => {
    //   console.log(character);
    // });
    // console.log("Success:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// getCharacters();

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
