/**
 * Write a function that returns both the minimum and maximum number of the given list/array.
 * @param {Array} x 
 * @returns Array
 */
function minMax(arr){
    let min = arr[0], 
        max = arr[0];
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(min >= arr[i]) min = arr[i]
    }
    for(let i = 0; i < arr.length; i++) {
        if(max <= arr[i]) max = arr[i]
    }
    result.push(min)
    result.push(max)
    return result 
}