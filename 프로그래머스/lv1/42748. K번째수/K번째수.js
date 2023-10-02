function solution(array, commands) {
    let answer = [];
    for(item of commands) {
        let arr = array.slice(item[0]-1, item[1]).sort((a,b) => a - b);
        answer.push(arr[item[2] - 1]);
    }
    return answer;
}