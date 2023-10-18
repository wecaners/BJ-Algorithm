function solution(numbers) {
    const temp = []
    // 시작원소와 다음원소를 이중for문으로 더함.
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }
    
// 중복 제거를 위해 set을 이용하고 다시 배열로 바꿔주기 위해 스프레드로 펼쳐서 배열에 다시 넣었다.
    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b) // 오름차순 정렬을 위한 sort
}