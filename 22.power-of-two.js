/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let squared = Math.sqrt(n)
    if(Number.isInteger(squared)){
        return true
    }
    return false
};