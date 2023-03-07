function solution(M, N) {
    let answer = 0;
    answer = (M - 1) + (N - 1) * M;
    return answer;
}
// 가로인풋 - 1 만큼 잘라야함
// 세로인풋 - 1 * 가로 만큼 잘라야함

console.log(solution(2, 5));