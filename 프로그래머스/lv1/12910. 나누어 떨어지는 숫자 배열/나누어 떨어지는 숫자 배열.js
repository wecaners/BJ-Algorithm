function solution(arr, divisor) {
    let answer = [];
    arr.map((item, i) => {
        if(item % divisor === 0) {
            answer.push(item)
        }
    })
    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}