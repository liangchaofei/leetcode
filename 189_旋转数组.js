/*
 * @Author: your name
 * @Date: 2020-02-27 15:51:24
 * @LastEditTime: 2020-02-27 16:02:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode_fe/189_旋转数组.js
 */

// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

// 每次把最后一项截取放到第一项的位置，执行k次
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    for (let i = 0; i < k; i ++) {
      nums.unshift(nums.pop());
    }
  };
  
//   第二版，直接将最后k项截取放到最前面
var rotate = function(nums, k) {
    return nums.splice(0, 0, ...nums.splice(nums.length - k));
};

var nums = [-1,-100,3,99], k = 2;
console.log(rotate(nums,k))
var n2 = [1,2,3,4,5,6,7], j =3;
// console.log(rotate(n2,j))