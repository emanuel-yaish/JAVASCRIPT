const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (const neighbours of listOfNeighbours) {
  for (const neighbour of neighbours) {
    console.log(`neighbour: ${neighbour}`);
  }
}
