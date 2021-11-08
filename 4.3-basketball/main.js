// Calculate the average
function calculateAvg(scoreArr) {
  let scoreSum = 0;
  scoreArr.forEach((score) => {
    scoreSum = scoreSum + score;
  });

  return scoreSum / scoreArr.length;
}

// Decide which teams wins in average (highest average score), and print the
// winner to the console. Also include the average score in the output.
function logWinner(teamAName, teamAAVG, teamBName, teamBAVG) {
  if (teamAAVG > teamBAVG) {
    console.log(
      `${teamAName} wins with avgarage of: ${teamAAVG} vs second place ${teamBName} with average ${teamBAVG}`
    );
  } else if (teamAAVG < teamBAVG) {
    console.log(
      `${teamBName} wins with average ${teamBAVG} vs second place ${teamAName} with avgarage of: ${teamAAVG}`
    );
  } else {
    console.log(`draw of avgarage: ${teamAAVG}`);
  }
}

let johnTeamPoints = [89, 120, 103];
let mikeTeamPoints = [116, 94, 123];

// 1. Calculate the average score for each team
let johnTeamAVG = calculateAvg(johnTeamPoints);
let mikeTeamAVG = calculateAvg(mikeTeamPoints);

// 2. Decide which teams wins in average (highest average score), and print the
// winner to the console. Also include the average score in the output.
logWinner("John Team", johnTeamAVG, "Mike team", mikeTeamAVG);

// 3. Then change the scores to show different winners. Don't forget to take into
// account there might be a draw (the same average score)
johnTeamPoints = [118, 130, 123];
mikeTeamPoints = [126, 114, 83];

johnTeamAVG = calculateAvg(johnTeamPoints);
mikeTeamAVG = calculateAvg(mikeTeamPoints);
logWinner("John Team", johnTeamAVG, "Mike team", mikeTeamAVG);

johnTeamPoints = [118, 130, 114];
mikeTeamPoints = [130, 114, 118];
johnTeamAVG = calculateAvg(johnTeamPoints);
mikeTeamAVG = calculateAvg(mikeTeamPoints);
logWinner("John Team", johnTeamAVG, "Mike team", mikeTeamAVG);

// EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105
// points. Like before, log the average winner to the console.

johnTeamPoints = [89, 120, 103];
mikeTeamPoints = [116, 94, 123];
let maryTeamPoints = [97, 134, 105];

johnTeamAVG = calculateAvg(johnTeamPoints);
mikeTeamAVG = calculateAvg(mikeTeamPoints);
let maryTeamAVG = calculateAvg(maryTeamPoints);

function threePlayer() {
  if (johnTeamAVG === mikeTeamAVG && johnTeamAVG === maryTeamAVG) {
    console.log(`All teams winners with draw of ${johnTeamAVG} points`);
    return;
  }

  if (johnTeamAVG === mikeTeamAVG) {
    if (johnTeamAVG > maryTeamAVG) {
      console.log(
        `Mary team with avarage of ${maryTeamAVG} is at the third place`
      );
      console.log(
        `John team and Mike team winners with draw of ${johnTeamAVG}`
      );
      return;
    } else {
      console.log(`John team and Mike team lost with draw of ${johnTeamAVG}`);
      console.log(`Mary team winners with avarage of ${maryTeamAVG}`);
      return;
    }
  }

  if (johnTeamAVG === maryTeamAVG) {
    if (maryTeamAVG > mikeTeamAVG) {
      console.log(
        `Mike team with avarage of ${mikeTeamAVG} is at the third place`
      );
      console.log(
        `John team and Mary team winners with draw of ${johnTeamAVG}`
      );
      return;
    } else {
      console.log(`John team and Mary team lost with draw of ${johnTeamAVG}`);
      console.log(`Mike team winners with avarage of ${maryTeamAVG}`);
    }
    return;
  }

  if (mikeTeamAVG === maryTeamAVG) {
    if (maryTeamAVG > johnTeamAVG) {
      console.log(
        `John team with avarage of ${johnTeamAVG} is at the third place`
      );
      console.log(
        `Mike team and Mary team winners with draw of ${mikeTeamAVG}`
      );
      return;
    } else {
      console.log(`Mike and Mary team lost with draw of ${mikeTeamAVG}`);
      console.log(`John team winners with avarage of ${johnTeamAVG}`);
    }
    return;
  }

  if (johnTeamAVG > mikeTeamAVG && maryTeamAVG > mikeTeamAVG) {
    console.log(
      `mike team with avarage of ${mikeTeamAVG} is at the third place`
    );
    logWinner("John Team", johnTeamAVG, "Mary team", maryTeamAVG);
    return;
  }

  if (johnTeamAVG > maryTeamAVG && mikeTeamAVG > maryTeamAVG) {
    console.log(
      `Mery team with avarage of ${maryTeamAVG} is at the third place`
    );
    logWinner("John Team", johnTeamAVG, "Mike team", mikeTeamAVG);
    return;
  }

  if (maryTeamAVG > johnTeamAVG && mikeTeamAVG > johnTeamAVG) {
    console.log(
      `John team with avarage of ${johnTeamAVG} is at the third place`
    );
    logWinner("Mike team", mikeTeamAVG, "Mary team", maryTeamAVG);
    return;
  }
}

// 4. ry also plays basketball, and her team scored 97, 134 and 105
// points. Like before, log the average winner to the console

threePlayer();

// 5. Like before, change the scores to generate different winners, keeping in
// mind there might be draws.

johnTeamPoints = [89, 120, 103];
mikeTeamPoints = [120, 89, 103];
maryTeamPoints = [103, 89, 120];

johnTeamAVG = calculateAvg(johnTeamPoints);
mikeTeamAVG = calculateAvg(mikeTeamPoints);
maryTeamAVG = calculateAvg(maryTeamPoints);

threePlayer();

johnTeamPoints = [90, 120, 103];
mikeTeamPoints = [120, 89, 103];
maryTeamPoints = [103, 89, 120];

johnTeamAVG = calculateAvg(johnTeamPoints);
mikeTeamAVG = calculateAvg(mikeTeamPoints);
maryTeamAVG = calculateAvg(maryTeamPoints);

threePlayer();

johnTeamPoints = [89, 120, 103];
mikeTeamPoints = [110, 89, 103];
maryTeamPoints = [103, 89, 120];

johnTeamAVG = calculateAvg(johnTeamPoints);
mikeTeamAVG = calculateAvg(mikeTeamPoints);
maryTeamAVG = calculateAvg(maryTeamPoints);

threePlayer();

johnTeamPoints = [89, 120, 103];
mikeTeamPoints = [120, 89, 103];
maryTeamPoints = [113, 89, 120];

johnTeamAVG = calculateAvg(johnTeamPoints);
mikeTeamAVG = calculateAvg(mikeTeamPoints);
maryTeamAVG = calculateAvg(maryTeamPoints);

threePlayer();
