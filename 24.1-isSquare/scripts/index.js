function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

Square.prototype["isSquare"] = function () {
  return this.a === this.b && this.a === this.c && this.a == this.d;
};

const mySquare = new Square(1, 1, 1, 1);

console.log(mySquare.isSquare());
