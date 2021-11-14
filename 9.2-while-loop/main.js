const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

function populationPercentages(populations) {
  const percentages = [];
  let populationIndex = 0;

  while (populationIndex < populations.length) {
    percentages.push(percentageOfWorld1(populations[populationIndex]));
    populationIndex++;
  }
  return percentages;
}

const populations = [9, 30, 27, 1441];
console.log(populationPercentages(populations));
