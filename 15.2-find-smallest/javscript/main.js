function findSmallest(a, b, c) {
  if (a > c && b > c) {
    return c;
  } else if (a > b && c > b) {
    return b;
  } else {
    return a;
  }
}
findSmallest(52, 66, 2);
console.log(findSmallest(3, 2, 1));
console.log(findSmallest(1, 2, 3));
console.log(findSmallest(2, 3, 1));
console.log(findSmallest(1, 3, 2));
