/*
 * @Author: your name
 * @Date: 2020-04-19 21:55:25
 * @LastEditTime: 2020-04-19 22:23:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/51-100/66_??.js
 */

var arr = [1,2,3];

var plusOne = function(digits) {
    const len = digits.length;
   for(let i = len - 1; i >= 0; i--) {
       digits[i]++;
       digits[i] %= 10;
       if(digits[i]!=0)
           return digits;
   }
   digits = [...Array(len + 1)].map(_=>0);;
   digits[0] = 1;
   return digits;
};
