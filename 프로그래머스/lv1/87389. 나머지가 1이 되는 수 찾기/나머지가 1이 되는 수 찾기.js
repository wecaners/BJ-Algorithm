function solution(n) {
  let array = [];
  for (let x = 1; x < n; x++) {
    if (n % x === 1) {
      array.push(x);
    }
  }
  return array[0];
}

solution(10);
