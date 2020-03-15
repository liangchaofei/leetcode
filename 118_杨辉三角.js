/*
 * @Author: your name
 * @Date: 2020-02-25 21:24:17
 * @LastEditTime: 2020-02-25 21:34:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode_fe/118_杨辉三角.js
 */
// 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

// 在杨辉三角中，每个数是它左上方和右上方的数的和。

// 示例:

// 输入: 5
// 输出:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

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
    return result;
}
console.log(generate(num))