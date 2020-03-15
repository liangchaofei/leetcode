/*
 * @Author: your name
 * @Date: 2019-10-22 13:30:43
 * @LastEditTime: 2019-10-22 15:28:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode_fe/03_杨辉三角.js
 */


// 在杨辉三角中，每个数是它左上方和右上方的数的和。
// 输入: 5
// 输出:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

var generate = function (numRows) {
    let arr = [];
    if (numRows < 0) {
        return arr;
    }
    for (let i = 0; i < numRows; i++) {
        let res = []
        for (let j = 0; j <= i; j++) {
            if (j > 0 && j < i) {
                res.push(arr[i - 1][j - 1] + arr[i - 1][j]);
            } else {
                res.push(1)
            }
        }
        arr.push(res)
    }
    return arr
};


console.log(generate(5))