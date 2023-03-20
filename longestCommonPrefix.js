// function longestCommonPrefix (strs) {
//     if (strs.length === 0) return ''
//     let prefix = strs[0]
//     for (let i = 1; i < strs.length; i++) {
//         while (strs[i].indexOf(prefix) !== 0) {
//             prefix = prefix.substring(0, prefix.length - 1)
//             if (prefix === '') return ''
//         }
//     }
//     return prefix
// }

// var longestCommonPrefix = function (strs) {
//     // Return early on empty input
//     if (!strs.length) return '';
//
//     // Loop through the letters of the first word
//     for (let i = 0; i <= strs[0].length; i++) {
//         // Check if this character is present in the same position of every string
//         if (!strs.every((string) => string[i] === strs[0][i])) {
//             // If not, return the string up to and including the previous character
//             return strs[0].slice(0, i);
//         }
//     }
//
//     return strs[0];
// };

var longestCommonPrefix = function (strs) {
    return strs.reduce((prev, next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    })
};

// optimized solution

// var longestCommonPrefix = function (strs) {
//     if (strs.length === 0) return "";
//
//     strs.sort();
//
//     if (strs[0] === "") return "";
//
//     let i = 0;
//
//     let start = strs[0], end = strs[strs.length - 1];
//
//     let result = "";
//
//     while (i < start.length) {
//         if (start[i] === end[i]) {
//             result += start[i];
//             i++;
//         } else {
//             break;
//         }
//     }
//
//     return result;
//
// }
