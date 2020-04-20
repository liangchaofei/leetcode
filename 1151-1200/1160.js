/*
 * @Author: your name
 * @Date: 2020-04-20 22:16:16
 * @LastEditTime: 2020-04-20 22:23:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/1151-1200/1160.js
 */

let words = ["cat","bt","hat","tree"], chars = "atach";
var countCharacters = function(words, chars) {
    let charMap = new Map()
  let size = 0;
  for(let i of chars){
    charMap.set(i,charMap.has(i)?charMap.get(i)+1:1)
  }
  for(let word of words) {
    let wordMap = new Map();
    for(let char of word) {
      wordMap.set(char, wordMap.has(char) ? wordMap.get(char) + 1 : 1)
    }
    let enough = true;
    for(let [key, value] of wordMap) {
      if( !charMap.has(key) || charMap.get(key) < value ){
        enough = false;
        break;
      }
    }
    size = enough ? size + word.length : size
  }
  return size;
};
console.log(countCharacters(words,chars))