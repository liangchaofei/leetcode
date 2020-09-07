/*
 * @Author: your name
 * @Date: 2020-06-02 09:27:22
 * @LastEditTime: 2020-06-02 09:32:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/301-350/347.js
 */ 
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const hashTable = {}
    nums.forEach(item => {
      if (hashTable[item] === undefined) {
        hashTable[item] = 1
      } else {
        hashTable[item]++
      }
    })
    console.log(hashTable)
    hashTableArray = Object.keys(hashTable)
    console.log(hashTableArray)
    hashTableArray.sort((prev, next) => {
      return hashTable[next] - hashTable[prev]
    })
    console.log(hashTableArray)
    return hashTableArray.slice(0, k)
  };
  let nums = [1,1,1,2,2,3] ,k = 2;
  console.log(topKFrequent(nums,k))