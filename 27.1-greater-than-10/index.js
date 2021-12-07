const testNumber = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 10) return resolve("Success - Greater than 10");
    return reject("Error - smaller than 10");
  })
    .then((success) => {
      console.log(success);
    })
    .catch((error) => {
      console.log(error);
    });
};

testNumber(5);
testNumber(11);
