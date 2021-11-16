const arr = [1, 2, 3, 4, 5];

// 1. max

console.log(arr.reduce((avg, current) => (avg < current ? current : avg)));

// 2. sum of even numbers

console.log(
  arr.reduce((sum, current) => {
    if (current % 2 === 0) sum += current;
    return sum;
  }, 0)
);
// 3. average
console.log(
  arr.reduce((sum, current) => {
    sum += current / arr.length;
    return sum;
  }, 0)
);
