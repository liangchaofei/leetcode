/*
 * @Author: your name
 * @Date: 2020-03-02 21:30:08
 * @LastEditTime: 2020-03-02 21:35:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode_fe/268_缺失数字.js
 */
// 给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。

// 示例 1:

// 输入: [3,0,1]
// 输出: 2
// 示例 2:

// 输入: [9,6,4,2,3,5,7,0,1]
// 输出: 8

var nums = [9,6,4,2,3,5,7,0,1];
var missingNumber = function(nums) {
    if(nums.length === 1 || nums.length === 2) return nums.length;
    nums.sort((a,b) => b-a);
    for(let i = 0;i<nums.length;i++){
        if(nums[i] - nums[i+1] !==1){
            return nums[i]-1;
        }
    }
};
console.log(missingNumber(nums))