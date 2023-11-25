function solution(k, tangerine) {
    // 종류 최소화 -> 여러개 있는 종류부터 픽
    let answer = 0;
    const tangerineObj = {};
    
    // 중복된 값 개수 구하기
    tangerine.forEach((t) => (tangerineObj[t] = (tangerineObj[t] || 0) + 1));
    
    // 내림차순으로 중복된 값 개수 정렬하기
    const arr = Object.values(tangerineObj).sort((a, b) => b - a);
    
    // 정렬된 값에서 차례대로 개수를 더하다가 k와 같거나 커지면 answer 출력.
    for(const t of arr) {
        answer++;
        if(k > t) k -= t;
        else break;
    }
    
    return answer;
}
