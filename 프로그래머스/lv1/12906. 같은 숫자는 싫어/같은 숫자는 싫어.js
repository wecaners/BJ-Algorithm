function solution(arr)
{
    let answer = arr.filter((item, index) => item != arr[index + 1]);
    return answer
}
solution([1,1,3,3,0,1,1]);