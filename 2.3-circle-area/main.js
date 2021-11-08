const PI = 3.14159265359;
function calculateCircleArea(radius) {
  let circleArea = PI * radius ** 2;
  console.log(`Calculate: ${circleArea} Rounded: ${circleArea.toFixed(2)}`);
}

calculateCircleArea(5);
