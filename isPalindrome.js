// let isPalindrome = function(x) {
//     let str = x.toString();
//     let strReverse = str.split('').reverse().join('');
//     return str === strReverse;
//
// };

var isPalindrome = function(x) {
    const num = x.toString().split("");
    let reversedNums = [];
    let isPalindrome = true;

    for (let i = num.length - 1; i >= 0; i--) reversedNums.push(num[i]);
    for(let i = 0; num.length > i; i++) {
        if(num[i] !== reversedNums[i]) {
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
};
isPalindrome(5)
