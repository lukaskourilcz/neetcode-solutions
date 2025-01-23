/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = []
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (const char of s) {
        if (char in brackets) {
            stack.push(char);
        } else { 
            if (stack.length === 0 || brackets[stack.pop()] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0
};