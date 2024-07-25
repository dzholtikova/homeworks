function pow(x, y) {
  let result = 1;
  let i = 0;
  while (i < y) {
    result *= x;
    i++;
  }
  console.log(result);
}
