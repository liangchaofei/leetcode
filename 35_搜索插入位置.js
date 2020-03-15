/*
 * @Author: your name
 * @Date: 2020-02-21 21:18:57
 * @LastEditTime: 2020-02-21 21:58:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode_fe/35_搜索插入位置.js
 */
// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 你可以假设数组中无重复元素。

// 示例 1:

// 输入: [1,3,5,6], 5
// 输出: 2
// 示例 2:

// 输入: [1,3,5,6], 2
// 输出: 1
// 示例 3:

// 输入: [1,3,5,6], 7
// 输出: 4
// 示例 4:

// 输入: [1,3,5,6], 0
// 输出: 0


var arr = [1, 3, 5, 6], target = 5;
// var arr = [1,3,5,6],target = 2;

// function fn(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= target) {
//             return i;
//         }
//     }
//     return arr.length;
// }
// console.log(fn(arr, target))



function fn(arr,target){
    let left = 0, right =arr.length - 1;
    while(left<right){
        let mid = parseInt((left+right)/2);

        if(target === arr[mid]){
            return mid;
        }else if(target < arr[mid]){
            right = right -1;
        }else{
            left = left +1;
        }
    }
    return left;
}
console.log(fn(arr, target))