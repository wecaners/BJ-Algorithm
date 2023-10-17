function solution(absolutes, signs) {
    let answer = 0;
    for(let i = 0; i < signs.length; i++) {
        if(signs[i] === true) {
            answer += absolutes[i];
        } else if(signs[i] === false) {
            answer += absolutes[i] * -1;
        }
    }
    return answer;
}
solution([4,7,12], [true, false, true])