const fs = require("fs");
const [N, K] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);
function divisor(N, K) {
  let divisors = [];
  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      divisors.push(i);
    }
  }
  if (divisors.length < K) {
    console.log(0);
  } else {
    console.log(divisors[K - 1]);
  }
}
