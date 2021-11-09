function LengthOfStrings(arr) {
  const lenghtArray = [];
  for (let index = 0; index < arr.length; index++) {
    lenghtArray.push(arr[index].length);
  }
  return lenghtArray;
}

const arr = ["boo", "doooo", "hoo", "ro"];
console.log(LengthOfStrings(arr));
