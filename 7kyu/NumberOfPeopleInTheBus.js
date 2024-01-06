/**
 * @param {Array} x 
 * @returns Number
 */

var number = function(busStops){
    let result = 0;
    busStops.forEach((elem) => {
      result += elem[0] - elem[1]
    })
    
    return result
}