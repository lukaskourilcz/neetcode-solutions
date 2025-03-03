var containsNearbyDuplicate = function(nums, k) {
    const seen = {};
for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    if (seen.hasOwnProperty(number)) {
        const previousIndex = seen[number];
        if (Math.abs(i - previousIndex) <= k) {
            return true;
        }
    }
    seen[number] = i;
}
return false;
};