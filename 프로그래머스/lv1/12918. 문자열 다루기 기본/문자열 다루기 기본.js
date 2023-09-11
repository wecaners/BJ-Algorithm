function solution(s) {
    let isNumber = false;
    if(s.length === 4 || s.length === 6) {
        for(let i = 0; i < s.length; i++) {
            isNumber = !isNaN(s[i])
            if(isNumber === false){
                break;
            }
        }
    }
    return isNumber;
}

solution('a234');