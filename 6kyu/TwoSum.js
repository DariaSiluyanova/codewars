//https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
function twoSum(numbers, target) {
    let arr = [];
    for(let i = 0; i < numbers.length; i++) {
        let min = target - numbers[i];
        for(let j = numbers.length - 1; j > i; j--) {
            if(min === numbers[j]) {
                arr.push(i, j)
            }
        }
    }
    return arr
}

console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([1234, 5678, 9012], 14690));
console.log(twoSum([2, 2, 3], 4));
console.log(twoSum([2, 3, 1], 3));
