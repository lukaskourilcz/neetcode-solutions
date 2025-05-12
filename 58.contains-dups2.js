hasDuplicate(nums) {
    let noDuplicates = new Set(nums)
    if(nums.length === noDuplicates.size){
        return false
} else {
    return true
}
}