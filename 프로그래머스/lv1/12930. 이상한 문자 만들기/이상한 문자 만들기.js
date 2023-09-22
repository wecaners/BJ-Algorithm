function solution(s) {
    let splitedString = s.split(' ');
    let answer = [];
    let word = '';
    
    for(let i = 0; i < splitedString.length; i++) {
        for(let j = 0; j < splitedString[i].length; j++) {
            if(j % 2 === 0) {
                word += splitedString[i][j].toUpperCase();
            } else if (j % 2 !== 0) {
                word += splitedString[i][j].toLowerCase();
            }
        }
        
        answer.push(word);
        word = '';
    }
    return answer.join(' ');
}

solution('try hello world');