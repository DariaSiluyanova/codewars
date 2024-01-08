/**
 * ctrl+shift+p
 * https://www.codewars.com/kata/list-filtering/train/javascript
 * @param {Array} l 
 * @returns Array
 */
const filter_list = (l) => {
    return l.filter((item) => typeof item == "number")
}
