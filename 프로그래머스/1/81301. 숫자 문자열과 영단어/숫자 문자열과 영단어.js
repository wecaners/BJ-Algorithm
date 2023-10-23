function solution(s) {
    
    const words = ['zero', 'one', 'two' ,'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let answer = s;
    
    words.forEach((item, index) => {
        answer = answer.split(item).join(index); 
// answer에서 item 요소를 찾아서, index로 변환함 split으로 item 분할 후 join으로 index로 바꿈
    }) 
    return Number(answer); // answer가 문자열이라 Number로 형변환
}

console.log(solution("one4seveneight"))