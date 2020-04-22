/*
 * @Author: your name
 * @Date: 2020-04-22 23:52:43
 * @LastEditTime: 2020-04-23 00:04:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/1000-1050/1047.js
 */

 var str  = "abbaca";
var removeDuplicates = function(S) {
    let stack=[];
    for(let i of S){
        console.log('i',i)
        if(stack.length){
            if(stack[stack.length-1]===i){
                stack.pop();
            }else{
                stack.push(i)
            }
        }else{
            stack.push(i)
        }
    }
    return stack.join('')
};
console.log(removeDuplicates(str))