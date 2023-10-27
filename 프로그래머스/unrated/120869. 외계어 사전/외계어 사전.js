function solution(spell, dic) {
    let sortedSpell = spell.sort().join("");
    let sortedDic = dic.map((item) => item.split("").sort().join(""));
    
    for(let i = 0; i < dic.length; i++) {
        if(sortedSpell === sortedDic[i]) {
            return 1;
        }
    }
    return 2;
}