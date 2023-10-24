function solution(keyinput, board) {
    let xLimit = Math.floor(board[0] / 2);
    let yLimit = Math.floor(board[1] / 2);
    let x = 0;
    let y = 0;
    const answer = [];
    keyinput.forEach((item) => {
        if(item === 'up' && y < yLimit) {
            y++;
        } else if(item === 'down' && y > -yLimit) {
            y--;
        } else if(item === 'left' && x > -xLimit) {
            x--;
        } else if(item === 'right' && x < xLimit) {
            x++;
        }
    })
    answer.push(x);
    answer.push(y);
    return answer;
}