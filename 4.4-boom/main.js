function sevenBoom(num) {
  for (let index = 1, stringIndex = ""; index <= num; index++) {
    stringIndex = index.toString();
    if (index % 7 === 0 && stringIndex.includes(7)) console.log("Boom-Boom");
    else if (index % 7 === 0) console.log("Boom");
    else console.log(index);
  }
}

sevenBoom(18);
