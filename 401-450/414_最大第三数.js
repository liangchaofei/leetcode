/*
 * @Author: your name
 * @Date: 2020-03-05 11:39:17
 * @LastEditTime: 2020-03-05 11:40:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode_fe/401-450/414_最大第三数.js
 */
var thirdMax = function(nums) {
    let maxArr = new Array(3).fill(-Infinity);
    console.log('maxArr',maxArr)
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        for(let j = 0; j < maxArr.length; j++) {
            // 最大值已存在, 跳出
            if (num === maxArr[j]){
                break;
            }
            // 最大值数组替换
            if (num > maxArr[j]) {
                let cache = num;
                num = maxArr[j];
                maxArr[j] = cache;
            }
        }
    }
    return maxArr[2] === -Infinity ? maxArr[0] : maxArr[2];
};
var nums  = [3, 2, 1];
console.log(thirdMax(nums))