/*
 * @Author: your name
 * @Date: 2019-10-24 13:01:52
 * @LastEditTime: 2019-10-24 13:02:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode_fe/05_旋转数组.js
 */
// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
// 输入: [1,2,3,4,5,6,7] 和 k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右旋转 1 步: [7,1,2,3,4,5,6]
// 向右旋转 2 步: [6,7,1,2,3,4,5]
// 向右旋转 3 步: [5,6,7,1,2,3,4]


var rotate = function(nums, k) {
    for(var i =0;i<k;i++){
        nums.unshift(nums.pop())
    }
};