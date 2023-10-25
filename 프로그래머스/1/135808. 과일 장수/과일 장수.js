function solution(k, m, score) {
    let sortedScore = score.sort((a, b) => a- b); // 오름차순으로 정렬한다.
    let answer = 0;
    while(sortedScore.length >= m) {
        let apples = sortedScore.splice(-m); // 오름차순으로 정렬한 배열의 뒤에서부터 m만큼 splice 한다.
        answer += apples[0] * m; // 0번째 인덱스가 가장 작은 값이니까 최소값 * m을 해주고 답에 넣어준다
    }
    
    return answer;
}