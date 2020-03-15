/*
 * @Author: your name
 * @Date: 2020-02-24 22:58:52
 * @LastEditTime: 2020-02-24 23:12:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode_fe/88_合并两个有序数组.js
 */
// 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

// 说明:

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
// 示例:

// 输入:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// 输出: [1,2,2,3,5,6]

var nums1 = [1, 2, 3, 0, 0, 0], nums2 = [2, 5, 6];

function merge(nums1, m, nums2, n) {
    for (var i = 0; i < nums2.length; i++) nums1[m + i] = nums2[i];
    nums1.sort(function (a, b) {
        return a - b
    })
    return nums1;
};

console.log(merge(nums1, 3, nums2, 3))