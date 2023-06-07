function solution(num) {
  let result = "";
  if (num % 2 === 0) {
    return (result = "Even");
  } else {
    return (result = "Odd");
  }
  return result;
}

console.log(solution(4));
