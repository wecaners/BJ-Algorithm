function solution(nums) {
    // N/2 마리의 포켓몬
    const max = nums.length / 2;
    const a = new Set(nums);
    const arr = [...a];
    if(arr.length >= max) {
        return max;
    } else {
        return arr.length;
    }
}

solution([3,1,2,3]);
