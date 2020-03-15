/*
 * @Author: your name
 * @Date: 2020-01-10 14:30:06
 * @LastEditTime : 2020-01-10 14:45:36
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode_fe/09_回文数.js
 */
// 输入 121
// 反过来是 121
// 输出 true

// 输入123
// 反过来是321
// 输出false

// 输入-121
// 输出 false
// 因为反过来是 121-

// 暴力法
function reverse(num){
    let y = num.toString();
    y = y.split('').reverse().join('');

    return num === y;
}
console.log(reverse(121))
console.log(reverse(-121))
console.log(reverse(123))

// 两边法
function reverse2(num){
    let y = num.toString();
    let i = 0, len = y.length-1,bool = true;
    while(y[i] !== y[len-i]){
        bool = false;
        break;
    }
    i++

    return bool;
}

console.log(reverse2(121))
console.log(reverse2(-121))
console.log(reverse2(123))

// 数学法
function reverse3(x){
    if(x<0){
        return false;
    }
    let rev = 0,y=x;
    while(y!=0){
        let pop = y %10;
        y = parseInt(y/10)
        rev = rev*10+pop;
    }
    return x === rev;
}

console.log(reverse3(121))
console.log(reverse3(-121))
console.log(reverse3(123))