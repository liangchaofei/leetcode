/*
 * @Author: your name
 * @Date: 2020-01-10 14:48:09
 * @LastEditTime : 2020-01-10 15:09:49
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode_fe/14_最长公共前缀.js
 */
// 编写一个函数来查找字符串数组中的最长公共字符串，如果不存在公共前缀，则返回空字符串

// 输入 ["flower","flow","flight"]
// 输出 'fl'

// 输入 ["dog","racecar","car"]
// 输出 ''


// 竖向扫描法：直接去一个字符串作为标准，依次将同索引的其他字符串与之相比，一旦发现不同即结束

var arr1 = ["flower","flow","flight"]
var arr2 = ["dog","racecar","car"]

function longestCommonPrefix(strs){
    let j = 0;
    if(strs.length<2){
        return strs[0] ? strs[0] : '';
    }
    while(true){
        for(let i = 1;i<strs.length;i++){
            let x = strs[i-1],y=strs[i];
            if(x[j] !== y[j]){
                return y.slice(0,j)
            }
            if(j === x.length){
                return x;
            }
        }
        j++
    }
}
console.log(longestCommonPrefix(arr1)) // fl
console.log(longestCommonPrefix(arr2))  // ''