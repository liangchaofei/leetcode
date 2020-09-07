/*
 * @Author: your name
 * @Date: 2020-03-08 15:02:31
 * @LastEditTime: 2020-03-08 15:22:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode_fe/401-450/408_找到所有数组中消失的数字.js
 */
var arr = [4,3,2,7,8,2,3,1];
let res = []
for(let i =1;i<arr.length;i++){
    if(!arr.includes(i)){
        res.push(i)
    }
}
console.log(res)