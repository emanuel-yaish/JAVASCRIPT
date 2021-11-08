const worldPopulation = 7900;

// function declaration
function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

// function expression

const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
};

//console log solutaion
function PopulationLog(PopulationPrecentage) {
  console.log(PopulationPrecentage);
}

//define 3 populations
const israelPopulations = 9.217;
const portugalPopulations = 10.31;
const thailandPopulations = 69.8;
const chinaPopulations = 1441;

//3 call with different populations percentageOfWorld1
console.log("execute with percentageOfWorld1");

const israelPercentage1 = percentageOfWorld1(9.217);
const portugalPercentage1 = percentageOfWorld1(10.31);
const thailandPercentage1 = percentageOfWorld1(69.8);
const chinaPercentage1 = percentageOfWorld1(1441);

PopulationLog(israelPercentage1);
PopulationLog(portugalPercentage1);
PopulationLog(thailandPercentage1);
PopulationLog(chinaPercentage1);

//3 call with different populations percentageOfWorld2
console.log("execute with percentageOfWorld2");

const israelPercentage2 = percentageOfWorld2(9.217);
const portugalPercentage2 = percentageOfWorld2(10.31);
const thailandPercentage2 = percentageOfWorld2(69.8);
const chinaPercentage2 = percentageOfWorld2(1441);

PopulationLog(israelPercentage2);
PopulationLog(portugalPercentage2);
PopulationLog(thailandPercentage2);
PopulationLog(chinaPercentage2);
