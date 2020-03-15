/*
 * @Author: your name
 * @Date: 2020-02-29 23:44:13
 * @LastEditTime: 2020-02-29 23:45:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode_fe/169_多数元素.js
 */
// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

// 示例 1:

// 输入: [3,2,3]
// 输出: 3
// 示例 2:

// 输入: [2,2,1,1,1,2,2]
// 输出: 2

// 解题思路
// • 暴力法：两层循环，外循环每遍历一个元素，内循环统计该元素个数，如果大于 n/2，则中断
// • 哈希表法：用对象存着每个元素个数量，最终遍历对象找最大值返回。
// • 排序法：用 sort 函数排序，然后返回 n/2 位置的数
// • 计数法：由于众数大于 n/2，设第一个元素为众数，数量为1，如果遇到不同数减1，最终数量大于1对应的元素为众数；时间复杂度 O(n)，空间复杂度 O(1)
/**
 * 计数法
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let max = nums[0],
        count = 1;
    for(let i = 1; i <nums.length; i++) {
      if (max === nums[i]) {
        count++;
      } else {
        count--;
        max = count ? max : nums[i + 1];
      }
    }
    return max;
  }
  
  /**
   * 哈希表法
   * @param {number[]} nums
   * @return {number}
   */
  var majorityElement = function(nums) {
    let a = {},
        len = nums.length;
    for(let i = 0; i < len; i++) {
      if (a[nums[i]]) {
        a[nums[i]]++;
      } else {
        a[nums[i]] = 1;
      }
    }
    let max = 0,
        init = Number.MIN_VALUE;
    for(let key in a) {
      if (a[key] > init) {
        max = key;
        init = a[key];
      }
    }
    return max;
  };
  
  /**
   * 排序法
   * @param {number[]} nums
   * @return {number}
   */
  var majorityElement = function(nums) {
    return nums.sort((a, b) => a - b)[nums.length >> 1];
  }