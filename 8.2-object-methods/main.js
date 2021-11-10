const myCountry = {
  country: "Israel",
  capital: "Jerusaem",
  language: "Hebrew",
  population: "9.3",
  neighbours: ["Egypt", "Lebanon", "Syria"],

  describe() {
    console.log(
      `${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland() {
    this.neighbours.length > 0
      ? (this.isIsland = false)
      : (this.isIsland = true);
  },
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
