/*
 * @Author: your name
 * @Date: 2020-05-13 17:19:12
 * @LastEditTime: 2020-05-13 17:38:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/1-50/14.js
 */

var strs = ["flower","flow","flight"];
var longestCommonPrefix = function(strs) {
  if(strs.length ===0) return '';

  let first = strs[0];

  for(let i = 1;i<strs.length;i++){
    let j =0 
      for(; j<strs[i].length && j<first.length;j++){
          if(first[j] !== strs[i][j]){
              break;
          }
         
      }
      first = first.substr(0,j)
      if(first ==='')return first;
  }
  return first;
};

console.log(longestCommonPrefix(strs))