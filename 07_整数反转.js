/*
 * @Author: your name
 * @Date: 2020-01-09 16:39:15
 * @LastEditTime : 2020-01-10 14:25:07
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode_fe/07_整数反转.js
 */
/*给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
 示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21
*/

// function toServer(num){
//   if(num<0){
//     var str = num.toString();
//     var a = str.substr(0,1)
//     var b = str.substr(1,str.length)
//     if(num % 10 ==0){
//     return a + b.split('').reverse().join('').substr(1,b.length)
//     }else{
//       return a + b.split('').reverse().join('')
//     }
//   }else{
//     var str = num.toString()
//     if(num % 10 ==0){
//     return str.split('').reverse().join('').substr(1,str.length)
//     }else{
//     return str.split('').reverse().join('')
//     }
//   }
// }
// var num = -120123210;
// console.log(toServer(num))

function reverse(x){
  const max = Math.pow(2,31)
  let y =x.toString();
  y = y.split('').reverse().join('')
  if(x<0){
    y = -y.slice(0,-1)
  }
  if(y>max-1 || y<-max){
    return 0
  }
  return parseInt(y)
}
var num = -120123210;
console.log(reverse(num))