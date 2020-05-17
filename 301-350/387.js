/*
 * @Author: your name
 * @Date: 2020-05-17 10:12:51
 * @LastEditTime: 2020-05-17 10:15:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit  
 * @FilePath: /leetcode/301-350/387.js
 */ 
// let firstUniqChar = s => {
//     for(let i = 0; i< s.length;i++){
//         if(s.indexOf(i) === s.lastIndexOf(i)){
//             return i;
//         }
//     }
//     return -1   
// }

let firstUniqChar = s => {
    let hash = {};
    for(let i =0;i<s.length;i++){
        if(!hash[i]){
            hash[i] = 1;
        }else{
            hash[i]++
        }
    }

    for(let i =0;i<s.length;i++){
        if(hash[i] === 1){
            return i
        }
    }
    return -1;
}
var s = s = "leetcode";

console.log(firstUniqChar(s))