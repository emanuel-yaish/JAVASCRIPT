const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

function populationPercentages(populations) {
  const percentages = [];

  for (let index = 0; index < populations.length; index++) {
    percentages.push(percentageOfWorld1(populations[index]));
  }

  return percentages;
}

const populations = [9, 30, 27, 1441];
console.log(populationPercentages(populations));
