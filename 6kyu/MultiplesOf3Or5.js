/**
 * Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
 * @param Number
 * @returns Number
 **/
function solution(number){
    let sum = 0;
    let arr = []
    for (let i = 1; i < number; i++) {
      if(i % 3 == 0 || i % 5 == 0) {
        arr.push(i)
      } 
    }
    for(num of arr) {
      sum+=num
    }
    return sum
}