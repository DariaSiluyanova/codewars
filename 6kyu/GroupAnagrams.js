//https://www.codewars.com/kata/537400e773076324ab000262
function groupAnagrams(words){
    const sorted = words.map(word => word.split('').sort().join(''));
    const hash = [];

    for(let i = 0; i < words.length; i++) {
        if(!hash[sorted[i]]) {
            hash[sorted[i]] = [words[i]];
        } else {
            hash[sorted[i]].push(words[i]);
        }
    }
    return Object.values(hash)
}

console.log(groupAnagrams(["rat", "tar", "star"]))