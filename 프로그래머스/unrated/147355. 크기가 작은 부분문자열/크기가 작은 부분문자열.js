function solution(t, p) {
    let answer = [];
    let newArr = [];
    let count = 0;
    for(let i = 0; i <= t.length - p.length; i++) {
        answer.push(Number(t.slice(i, i + p.length)));   
    }
    newArr = answer.filter((item) => item <= Number(p))
    
    return newArr.length
    
}

solution("500220839878", "7");