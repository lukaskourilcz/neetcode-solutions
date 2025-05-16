class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let noDups = new Set(nums)
        let sorted = Array.from(noDups).sort((a, b) => a - b)
        let longest = 1;
        let currentStreak = 1;

        if(nums.length === 0) return 0

        for (let i = 1; i < sorted.length; i++) {
            if (sorted[i] === sorted[i - 1] + 1) {
                currentStreak++;
                longest = Math.max(longest, currentStreak);
            } else {
                currentStreak = 1;
            }
        }

        return longest;
    }
}
