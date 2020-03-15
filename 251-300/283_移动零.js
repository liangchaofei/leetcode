/*
 * @Author: your name
 * @Date: 2020-03-03 21:20:17
 * @LastEditTime: 2020-03-03 21:40:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode_fe/251-300/283_移动零.js
 */
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:

// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]

var nums = [0,1,0,3,12];
var moveZeroes = function(nums) {
    for(let i=nums.length;i>=0;i--){
            if(nums[i] === 0){
                nums.splice(i,1);
                console.log(nums)
                nums.push(0);
            }
        }
        return nums;
    
    };
    moveZeroes(nums)