/*
 * @Author: your name
 * @Date: 2019-10-23 17:07:57
 * @LastEditTime: 2019-10-23 17:23:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode_fe/04_杨辉三角2.js
 */
// 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
// 在杨辉三角中，每个数是它左上方和右上方的数的和。

// 示例:输入: 3
// 输出: [1,3,3,1]

var getRow = function(rowIndex) {
    let num = 1;
    let arr = [];
    for(let i = 0 ; i <= rowIndex; i++){
        arr.push(num)
        num = num *(rowIndex - i)/(i+1)
    }
    return arr
};
console.log(getRow(3))