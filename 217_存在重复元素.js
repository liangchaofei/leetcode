/*
 * @Author: your name
 * @Date: 2020-02-27 16:20:16
 * @LastEditTime: 2020-02-27 16:21:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode_fe/217_存在重复元素.js
 */
// set size


// 给定一个整数数组，判断是否存在重复元素。

// 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

var containsDuplicate = function(nums) {
    return new Set(nums).size != nums.length;
};


// hash表
var containsDuplicate = function(nums) {
    let set = new Set();
    for(let i = 0,len = nums.length;i<len;i++){
        if(set.has(nums[i])){
            return true;
        }
        set.add(nums[i]);
    }
    return false;
};


// 排序
var containsDuplicate = function(nums) {
    nums.sort((a,b)=>a-b);
    for(let i = 1,len = nums.length;i<len;i++){
        if(nums[i-1] == nums[i]){
            return true;
        }
    }
    return false;
};
