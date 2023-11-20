function solution(name, yearning, photo) {
    const object = {};
    const answer = [];
    name.forEach((item,i) => object[item] = yearning[i]); // 이름에 점수를 맵핑
    photo.map((item, i) => {
        let sum = 0;
        item.map((person) => { // 인자로 들어오는 이름에 접근
            if(name.includes(person)) {
                sum += object[person];
            }
        })
        answer.push(sum);
    })
    return answer;
}