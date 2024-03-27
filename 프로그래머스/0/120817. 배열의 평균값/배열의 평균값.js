function solution(numbers) {
    return numbers.reduce((a, c) => a + c / numbers.length, 0)
}