function solution(num_list) {
    const even = num_list.filter(v => v % 2 === 0).length;
    const odd = num_list.filter(v => v % 2 !== 0).length;
    return [even, odd]
}