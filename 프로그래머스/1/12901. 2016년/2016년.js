function solution(a, b) {
    // 2016년 1월 1일 금요일 - 기준
    // 윤년 366일 2월 29일 있음.
    // 입력 달 5 -> (31 + 29 + 31 + 30 + 24) % 7 
    const endOfMonth = [31,29,31,30,31,30,31,31,30,31,30,31];
    const date = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let day = b + 4; // 1월1일이 금요일 시작이라 b가 1일면 5번째 인덱스
    for(let i = 0; i < a - 1; i++) { // 1월은 이전달이 없어서 a - 1
        day = day + endOfMonth[i];
    }
    return date[day % 7];
}

solution(5, 24);