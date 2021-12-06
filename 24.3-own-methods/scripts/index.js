Array.prototype.myFilter = function (sortFunction) {
  const filteredArray = [];
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    if (sortFunction(this[i]) === true) {
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;
};

const arr = [1, 2, 3, 4];
let res = arr.myFilter((x) => x > 1);
console.log(res);

Array.prototype.myFind = function (findFunction) {
  for (let index = 0; index < this.length; index++) {
    if (findFunction(this[index]) === true) return this[index];
  }

  return -1;
};

res = arr.myFind((x) => x > 1);
console.log(res);
