function solution(number) {
    // 세개의 수를 뽑아 더하면 0이 되는 조합 찾기
    let answer = 0;
    for(let i = 0; i < number.length; i++) {
        for(let j = i + 1; j < number.length; j++) {
            for(let k = j + 1; k < number.length; k++) {
                if(number[i] + number[j] + number[k] === 0) answer++;
            }
        }
    }
    return answer;
}