const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const counterArray = Array(26).fill(0);

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

function letterCountArray(array) {
  letters = {};

  for (word of array) {
    word = word.replace(/\s/g, "");
    console.log(word);
    for (let index = 0; index < word.length; index++) {
      console.log(word[index].toUpperCase());
      letter = word[index].toUpperCase();
      counterArray[alphabet.indexOf(letter)]++;
    }
  }
  console.log(counterArray);
  return letters;
}

// extra //
function getMaxValue() {
  let index = counterArray.indexOf(Math.max(...counterArray));
  return alphabet[index];
}

letterCountArray(array);
console.log(getMaxValue(counterArray).toLowerCase());
