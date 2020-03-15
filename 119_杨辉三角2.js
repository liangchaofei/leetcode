/*
 * @Author: your name
 * @Date: 2020-02-26 17:08:14
 * @LastEditTime: 2020-02-26 17:24:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode_fe/119_杨辉三角2.js
 */
// 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。



// 在杨辉三角中，每个数是它左上方和右上方的数的和。

// 示例:

// 输入: 3
// 输出: [1,3,3,1]
var num = 5;
var generate = function (numRows){
    const result = [];
    if (numRows <= 0) {
        return result;
    }
    for (let i = 0; i < numRows; i ++) {
        const subArr = [];
        for (let j = 0; j <= i; j++) {
            if (j > 0 && j < i) {
                subArr.push(result[i-1][j-1] + result[i-1][j]);
            } else {
                subArr.push(1);
            }
        }
        result.push(subArr);
    }
    return result[result.length-1];
}
console.log(generate(num))