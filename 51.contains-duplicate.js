class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let noDups = new Set(nums)
        return noDups.size !== nums.length
    }
}
