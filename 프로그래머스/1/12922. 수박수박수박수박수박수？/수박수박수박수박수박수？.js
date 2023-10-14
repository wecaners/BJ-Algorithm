function solution(n) {
    let soo = '수';
    let bak = '박';
    let answer = '';
    for(let i = 0; i < n; i++) {
        if(answer.length % 2 === 0) {
            answer += soo;
        } else {
            answer += bak;
        }
    }
    return answer;
}

