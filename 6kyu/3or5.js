function solution(number){
    let arr = [];
    let res = null;
    for(let i = 1; i < number; i++) {
      if(i % 3 == 0 || i % 5 == 0) {
        arr.push(i)
      }
    }
    for(num of arr) {
        res+= num
    }

    return res
  }
console.log(solution(15))