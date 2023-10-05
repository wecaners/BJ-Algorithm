function solution(sizes) {
    // 제일 긴 길이 기준 하나 정함 -> width
    // 첫번째 원소랑, 두번째 원소 비교해서 큰 값을 앞에다 놓음 
    // 제일 긴 가로 * 제일 긴 세로 값 리턴?
    let maxWidth = 0;
    let maxHeight = 0;
    sizes.forEach((item) => {
        const[width, height] = item.sort((a,b) =>  b - a);
        if(width > maxWidth) {
            maxWidth = width;
        }
        if (height > maxHeight) {
            maxHeight = height;
        }
    })
    return maxWidth * maxHeight;
}