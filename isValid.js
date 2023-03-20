// var isValid = function(s) {
//     const stack = [];
//
//     for (let i = 0 ; i < s.length ; i++) {
//         let c = s.charAt(i);
//         switch(c) {
//             case '(': stack.push(')');
//                 break;
//             case '[': stack.push(']');
//                 break;
//             case '{': stack.push('}');
//                 break;
//             default:
//                 if (c !== stack.pop()) {
//                     return false;
//                 }
//         }
//     }
//
//     return stack.length === 0;
// };

var isValid = function(s) {
    var stack = [];
    var map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        } else {
            var last = stack.pop();

            if (s[i] !== map[last]) {
                return false;
            }
        }
    }

    if (stack.length !== 0) {
        return false;
    }

    return true;
}
