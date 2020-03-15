/*
 * @Author: your name
 * @Date: 2019-11-19 13:05:49
 * @LastEditTime: 2019-11-19 13:08:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode_fe/976_三角形的最大周长.js
 */
// 给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。

// 如果不能形成任何面积不为零的三角形，返回 0。

//  

// 示例 1：

// 输入：[2,1,2]
// 输出：5
// 示例 2：

// 输入：[1,2,1]
// 输出：0
// 示例 3：

// 输入：[3,2,3,4]
// 输出：10
// 示例 4：

// 输入：[3,6,2,3]
// 输出：8

// 1
var largestPerimeter = function(A) {
    A.sort((a,b) => a - b);
    for(let i = A.length-3; i >= 0; i--){
        if(A[i] + A[i+1] > A[i+2]){
            console.log(A[i],A[i+1],A[i+2])
            return A[i]+A[i+1]+A[i+2];
        }
    }
    return 0;
};
