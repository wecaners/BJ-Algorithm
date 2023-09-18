function solution(s, n) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    let answer = '';
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === ' ') {
            answer = answer + ' ';
            continue; // 다시 반복문으로 돌아가서 체크할 수 있게 continue를 넣어줌.
        }
        let arr = upper.includes(s[i]) ? upper : lower; // 대문자 or 소문자인지 체크
        let index = arr.indexOf(s[i]) + n; // 몇번째 인덱스에 있는 문자인지 찾고 n만큼 index 증가 시킴
        if(index >= arr.length) {
            index = index - arr.length;
        } // z에서 넘어가면 a부터 다시 시작할 수 있게 처리.
        answer = answer + arr[index]; // answer에다가 붙여주기
    }
    return answer;
}

solution('a B z', 4);