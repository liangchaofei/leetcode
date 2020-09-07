/*
 * @Author: your name
 * @Date: 2020-03-15 22:26:25
 * @LastEditTime: 2020-03-15 22:27:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode_fe/301-350/349_两个数组的交集.js
 */

// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1:

// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2]
// 示例 2:

// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [9,4]
var nums1 = [4,9,5], nums2 = [9,4,9,8,4];
var arr = [];
for(let i = 0;i<nums1.length;i++){
    if(nums2.indexOf(nums1[i])>-1){
        arr.push(nums1[i])
    }
}
console.log(arr)