function solution(s) {
    let length = 0;
    let count = 0;
    let lengthBefore = 0;
    let lengthAfter = 0;
    let time = 0;
    
    while(s.length !== 1) {
        lengthBefore = s.length;
        s=s.split('').filter(item => item==='1').join('')
        lengthAfter = s.length;
        count += lengthBefore - lengthAfter;
        length = s.length;
        s = length.toString(2);
        time++
    }
    return[time,count]
    
}

solution("110010101001");