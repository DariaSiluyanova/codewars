/**
 * Given an array of integers, remove the smallest value. Do not mutate the original array/list.
 * @param {Array} x 
 * @returns Array
 */

function removeSmallest(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
      if(min > numbers[i]) min = numbers[i]
    }
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
      if(numbers[i] == min) return result.concat(numbers.slice(i + 1))
      result.push(numbers[i])
    }
    return result;
}

console.log(removeSmallest([3,4,5,6,7,8,9,3]))