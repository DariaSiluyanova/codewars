//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
/**
 * function
 * @param{String} text
 * @return {String}
 */
function duplicateCount(text){
    let result = [];
    text = text.toLowerCase();
    let dictionary = {};

    for(letter in text) {
        dictionary[text[letter]] = 0;
    };

    for(letter of text) {
        dictionary[letter] = dictionary[letter] + 1;
    };

    for(key in dictionary) {
        if(dictionary[key] > 1) {
            result.push(key)
        }
    }
    return result.length;
}

console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibility"));
console.log(duplicateCount("Indivisibilities"));
console.log(duplicateCount(""));

