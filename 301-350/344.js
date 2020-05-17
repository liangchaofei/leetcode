/*
 * @Author: your name
 * @Date: 2020-05-17 09:39:15
 * @LastEditTime: 2020-05-17 09:42:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/301-350/344.js
 */ 
const reverseString = (s) => {
    // for(let i =0;i<s.length/2;i++){
    //     [s[i],s[s.length-1-i]] = [s[s.length-1-i],s[i]]
    // }
    // return s;
    for(let i =0;i<s.length/2;i++){
        let a = s[i];
        s[i] = s[s.length-1-i]
        s[s.length-1-i] =a
    }
    return s
}

let s = ["h","e","l","l","o"];
console.log(reverseString(s))