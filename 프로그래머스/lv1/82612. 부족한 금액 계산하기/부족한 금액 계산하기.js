function solution(price, money, count) {
    // count에 따라 price 뻥튀기 
    let totalPrice = 0;
    for(let i = 1; i <= count; i++) {
        totalPrice = totalPrice + (price * i);
    }
    let moneyDiff = money - totalPrice;
    // 음수인지 양수인지 확인 ? 
    return moneyDiff >= 0 ? 0 : Math.abs(moneyDiff)
}