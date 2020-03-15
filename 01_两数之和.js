/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 23:15:49
 * @LastEditTime: 2020-02-19 23:40:02
 * @LastEditors: Please set LastEditors
 */

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

var nums = [2,1,3, 7, 11, 15];
var target = 9;

var twoSum = function(nums, target) {
  // 哈希法：将遍历过的数组元素X的索引作为键值，将target-X的值作为键名，建立映射关系，遍历时判断对象是否存在值即可；时间复杂度：O(n)，空间复杂度：O(n)
   var targetKey = {}
  for(var i =0;i<nums.length;i++){
    var key = target - nums[i];
    targetKey[nums[i]] = i;
    console.log('targetKey',targetKey)
    if(targetKey[key] || targetKey[key] ===0){
      console.log('targetKey[key]',targetKey[key],i)
      return [targetKey[key],i]
    }
    
  }
 // 暴力法：将每个数组的每个数两两相加，两层循环实现即可；时间复杂度：O(n)，空间复杂度：O(1)
  // for(var i = 0;i<nums.length;i++){
  //   for(var j = i+1;j<nums.length-1;j++){
  //     if(nums[i] +nums[j] === target){
  //       return [i,j]
  //     }
  //   }
  // }
};
console.log(twoSum(nums,target))
