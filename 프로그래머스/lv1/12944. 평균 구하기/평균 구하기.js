function solution(arr) {
  let sum = 0;
  arr.forEach((item) => {
    sum = sum + item;
  });
  let result = sum / arr.length;
  return result;
}

console.log(solution([1, 2, 3, 4]));
