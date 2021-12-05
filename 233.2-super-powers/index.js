const storm = {
  superPower: "javascript",

  printSuperPower,
};
function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}
storm.printSuperPower();
