//https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
function createPhoneNumber(numbers){
    let code = "";
    for(let i = 0; i < numbers.length; i++) {
      code = code + numbers[i]
    }
    const phoneNum = code.replace(/[^\d]/g,'');
    const length = phoneNum.length;
    if(phoneNum < 4) return phoneNum;
    if(phoneNum < 7 ) {
        return `(${phoneNum.slice(0,3)}) ${phoneNum.slice(3)})`
    }

    return `(${phoneNum.slice(0,3)}) ${phoneNum.slice(3,6)}-${phoneNum.slice(6)}`
  }

  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
  console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));