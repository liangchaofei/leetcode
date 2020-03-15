/*
 * @Author: your name
 * @Date: 2020-02-20 23:29:19
 * @LastEditTime: 2020-02-20 23:41:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode_fe/26_删除排序数组中的重复项.js
 */
// 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。


// 示例 1:
// 给定数组 nums = [1,1,2], 

// 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 

// 你不需要考虑数组中超出新长度后面的元素。

// 示例 2:

// 给定 nums = [0,0,1,1,1,2,2,3,3,4],

// 函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

// 你不需要考虑数组中超出新长度后面的元素。


let nums = [1,1,2];
// let nums = [0,0,1,1,1,2,2,3,3,4]

function fn(arr){
    let len = arr.length;
    for(let i = len - 1;i>0;i--){
        if(arr[i] === arr[i-1]){
            arr.splice(i-1,1)
        }
    }
    return arr.length;
}

console.log(fn(nums))
