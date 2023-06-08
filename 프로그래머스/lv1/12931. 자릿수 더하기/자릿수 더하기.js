function solution(n) {
  let a = n.toString();
  let b = a.split("");
  let result = 0;
  b.forEach((element) => {
    result = result + Number(element);
  });
  return result;
}

console.log(solution(123));
console.log(solution(987));
