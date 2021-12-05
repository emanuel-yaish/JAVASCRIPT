function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function () {
  console.log(`I choose
    you, ${this.name} `);
};

Pokemon.prototype.attack = function (attackNumber) {
  console.log(`${this.name} used ${this.attackList[attackNumber]}`);
};

const pokemon1 = new Pokemon("Pikachu", "nice", ["hugs", "cute face"]);
const pokemon2 = new Pokemon("Squrtle", "not nice", [
  "huge ",
  "ugly face",
  "roar",
]);
const pokemon3 = new Pokemon("Emanuel", "very nice", ["smile", "good hurt"]);

pokemon1.callPokemon();
pokemon1.attack(1);
pokemon2.callPokemon();
pokemon2.attack(2);
