function solution(left, right) {
    // left ~ right 까지 약수 구하기 
    // 약수의 개수가 짝수인지 홀수인지 판단
    // 짝수라면 해당 수 더하기, 홀수이면 해당 수 빼기
    let answer = 0;
    for(let i = left; i <= right; i++){
        let count = 0;
        for(let j = 1; j<= i; j++) {
            if(i % j === 0) {
                count++;
            }
        }
        count % 2 === 0 ? answer += i : answer -= i;
    }
    return answer;
}