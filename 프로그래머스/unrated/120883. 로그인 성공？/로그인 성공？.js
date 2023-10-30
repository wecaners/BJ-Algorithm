function solution(id_pw, db) {
  let answer = '';
  
  db.map((item, i) => {if(id_pw[0] === item[0] && id_pw[1] === item[1]) answer = "login"
	else if(id_pw[0] === item[0] && id_pw[1] !== item[1]) answer =  "wrong pw"
	else if(id_pw[0] !== item[0] && id_pw[1] !== item[1]) answer = "fail"})
	
  return answer
}