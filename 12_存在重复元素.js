// 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。

// 示例 1:

// 输入: nums = [1,2,3,1], k = 3
// 输出: true
// 示例 2:

// 输入: nums = [1,0,1,1], k = 1
// 输出: true
// 示例 3:

// 输入: nums = [1,2,3,1,2,3], k = 2
// 输出: false

var containsNearbyDuplicate = function(nums, k) {
    // 解法1
    for(var i =0;i<nums.length;i++){
        for(var j=i+1;j<=i+k;j++){
            if(nums[i] == nums[j]){
                return true
            }
        }
    }
    return false;

    // 解法2
    let hash = new Map()
    
    for(let i = 0; i < nums.length; i++) {
        if(hash.has(nums[i])) {
            if(Math.abs(hash.get(nums[i]) - i) <= k) {
                return true
            } else {
                hash.set(nums[i], i)
            }
        } else {
            hash.set(nums[i], i)
        }
    }
    return false
};