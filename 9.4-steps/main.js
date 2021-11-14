function steps(n) {
  const step = Array(n);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j <= i) step[j] = "#";
      else step[j] = " ";
    }
    console.log(`${step.join("")}`);
  }
}

steps(3);
steps(4);
