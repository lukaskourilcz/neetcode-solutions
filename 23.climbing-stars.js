var climbStairs = function (n) {
    if (n <= 1) {
        return 1
    }
    let prev = 1
    let current = 1

    for (let i = 2; i <= n; i++) {
        let next = prev + current
        prev = current
        current = next
    }
    return current
};