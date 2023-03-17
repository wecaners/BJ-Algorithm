function solution(A, B) {
  let letter = A.split("");

  for (let i = 0; i <= A.length; i++) {
    if (A === B) {
      return 0;
    }
    let lastLetter = letter.pop();
    letter.unshift(lastLetter);
    let completeLetter = letter.join("");
    console.log(completeLetter);

    if (completeLetter === B) {
      return i + 1;
    } else if (i === A.length) {
      return -1;
    }
  }
}
solution("abc", "abc");
