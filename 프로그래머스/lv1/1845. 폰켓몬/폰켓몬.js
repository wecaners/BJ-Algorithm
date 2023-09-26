function solution(nums) {
 // 배열에서 중복 없엔다음 고를 수 있는 최대 수 구하기.
    // 남아있는 원소 수만큼이 최대로 고를 수 있는 포켓몬의 수
    // 남아있는 원소 수가 nums.length / 2 보다 크면 그냥 nums.length / 2 리턴
    let result = [...new Set(nums)];
    if(result.length > nums.length / 2){
        return nums.length / 2
    } else {
        return result.length
    }
    
    
}
solution([3,3,3,2,2,4])