//https://www.codewars.com/kata/541c8630095125aba6000c00
function digitalRoot(n) {
    if(n < 10) return n
    let res = 0;
    let num = n.toString();
    for(n of num) {
        res += Number(n)
    }
    return digitalRoot(res)
}

console.log( digitalRoot(16) )
console.log( digitalRoot(456) )