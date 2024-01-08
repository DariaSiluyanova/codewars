/**
 * Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
 * @param Number
 * @returns Number
 **/
function solution(roman) {
  let eur = 0;
  let current = 0;
  let previous = 0;
  let col = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
	for(const char of roman.split("").reverse()) {
    current = col[char];
    if(current >= previous) {
      eur += current;     
      console.log(eur, current)
    } else {
      eur -= current;
      console.log(eur, current)
    }
    previous = current;
  }
  return eur; 
}

// console.log(solution('XXI'));
// console.log(solution('I'));
// console.log(solution('IV'));
// console.log(solution('MMVIII'));
console.log(solution('MDCLXVI'));