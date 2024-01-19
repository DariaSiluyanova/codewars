//https://www.codewars.com/kata/5262119038c0985a5b00029f/javascript

function isPrime(num) {
    if(num <= 1) return false
    if(num == 2 || num == 3 || num == 5 || num == 7) return true
    let numSquare = Math.sqrt(num)
    if(num % numSquare == 0) {
        return false
    } 

    for(let i = 2; i <= numSquare; i++) {
        if(num % i == 0) return false
    }

    return true
}
  
console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(73));
console.log(isPrime(75));
console.log(isPrime(-1));
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(41));
console.log(isPrime(5099));
console.log(isPrime(4));
console.log(isPrime(6));
console.log(isPrime(8));
console.log(isPrime(9));
console.log(isPrime(45));
console.log(isPrime(-5));
console.log(isPrime(-8));
console.log(isPrime(-41));
console.log(isPrime(6806881));