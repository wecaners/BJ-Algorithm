function solution(d, budget) {
    let count = 0;
    d.sort((a, b) => a - b)
    for(let i = 0; i < d.length; i++) {
        
        budget = budget - d[i]
        if(budget >= 0) {
            count++;
        } 
    }
    return count;
}
console.log(solution([1,6,4,2,6], 15));