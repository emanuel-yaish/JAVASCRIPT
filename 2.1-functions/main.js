function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

let firstCountry = describeCountry("Israel", 9, "Jerusalem");
let secondCountry = describeCountry("Portugal", 10.31, "Lisbon");
let thirdCountry = describeCountry("Italy", 59.55, "Rome");

console.log(firstCountry);
console.log(secondCountry);
console.log(thirdCountry);
