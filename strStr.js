// var strStr = function(haystack, needle) {
//     if (needle.length == 0) return 0;
//     for (let i = 0; i < haystack.length; i++) {
//         if (haystack[i] == needle[0]) {
//             let j = 0;
//             while (j < needle.length && haystack[i + j] == needle[j]) {
//                 j++;
//             }
//             if (j == needle.length) return i;
//         }
//     }
//     return -1;
// };

var strStr = function(haystack, needle) {
  return haystack.indexOf(needle)
};
