//REGULAR EXPRESSIONS
//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
function solution(str){
   let result = [];
   let arr = str.split('')
   if(arr.length % 2 !== 0) arr.push("_")
   for(let i = 1; i <= arr.length; i = i + 2){
        result.push(`${arr[i - 1]}${arr[i]}`)
   }
   return result
}

console.log(solution("abcdef"));
console.log(solution("abcdefg"));
console.log(solution(""));