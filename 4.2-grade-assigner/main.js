function gradeAssigner(gradeNum) {
  if (gradeNum < 65) return "F";
  if (gradeNum < 70) return "D";
  if (gradeNum < 80) return "C";
  if (gradeNum < 90) return "B";
  if (gradeNum <= 100) return "A";
}

console.log(gradeAssigner(100));
console.log(gradeAssigner(95));
console.log(gradeAssigner(85));
console.log(gradeAssigner(75));
console.log(gradeAssigner(65));
console.log(gradeAssigner(45));
console.log(gradeAssigner(0));
