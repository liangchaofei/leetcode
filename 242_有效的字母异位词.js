/*
 * @Author: your name
 * @Date: 2019-11-08 12:50:55
 * @LastEditTime: 2019-11-08 12:51:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode_fe/242_有效的字母异位词.js
 */
// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 示例 1:

// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 示例 2:

// 输入: s = "rat", t = "car"
// 输出: false


var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    };
    return s.split('').sort().join('') === t.split('').sort().join('')
};