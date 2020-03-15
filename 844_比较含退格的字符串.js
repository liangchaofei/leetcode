/*
 * @Author: your name
 * @Date: 2019-11-11 12:49:11
 * @LastEditTime: 2019-11-11 12:49:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode_fe/844_比较含退格的字符串.js
 */
// 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。

//  

// 示例 1：

// 输入：S = "ab#c", T = "ad#c"
// 输出：true
// 解释：S 和 T 都会变成 “ac”。
// 示例 2：

// 输入：S = "ab##", T = "c#d#"
// 输出：true
// 解释：S 和 T 都会变成 “”。
// 示例 3：

// 输入：S = "a##c", T = "#a#c"
// 输出：true
// 解释：S 和 T 都会变成 “c”。
// 示例 4：

// 输入：S = "a#c", T = "b"
// 输出：false
// 解释：S 会变成 “c”，但 T 仍然是 “b”。
//  

// 提示：

// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S 和 T 只含有小写字母以及字符 '#'。
 
var backspaceCompare = function(S, T) {
    let f = (str) => {
        let result = []
        let arr = str.split('')
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '#') {
                result.pop()
            } else {
                result.push(arr[i])
            }
        }
        return result.join('')
    }
    return f(S) === f(T)

};