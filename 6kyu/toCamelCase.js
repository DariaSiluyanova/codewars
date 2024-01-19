//https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

function toCamelCase(str){
    if(str == "") return ''
    let re = /[_-]/;
    let toUpper = str.split(re)
    let result = "" + toUpper[0]
    for(item of toUpper) {
        if(toUpper.indexOf(item)) {
            item = item[0].toUpperCase() + item.slice(1)
            result+=item
        }
    }
    return result
}

console.log(toCamelCase('')),
console.log(toCamelCase("the_stealth_warrior")), 
console.log(toCamelCase("The-Stealth-Warrior")),
console.log(toCamelCase("A-B-C"))

