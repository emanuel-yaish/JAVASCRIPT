const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function letterCount(array) {
  letters = {};
  for (word of array) {
    word = word.replace(/\s/g, "");

    for (let index = 0; index < word.length; index++) {
      letter = word[index].toLowerCase();

      if (letters[letter]) {
        letters[letter] = letters[letter] + 1;
      } else {
        letters[letter] = 1;
      }
    }
  }
  return letters;
}

console.log(letterCount(array));
