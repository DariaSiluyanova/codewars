//https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
function spinWords(string){
    let result = string.split(/\s/)
    for(let i = 0; i < result.length; i++) {
        if(result[i].length >= 5) {
            result[i] = result[i].split("").reverse().join("")
        }
    }
    return result.join(" ")
}

console.log(spinWords("Welcome"))
console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("This is a test"))
console.log(spinWords("This is another test"))
console.log(spinWords("Just kidding there is still one more"))
console.log(spinWords("Seriously this is the last one"))