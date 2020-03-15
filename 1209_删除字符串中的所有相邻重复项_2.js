/*
 * @Author: your name
 * @Date: 2019-11-14 17:31:35
 * @LastEditTime: 2019-11-14 17:31:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode_fe/1209_删除字符串中的所有相邻重复项_2.js
 */
// 给你一个字符串 s，「k 倍重复项删除操作」将会从 s 中选择 k 个相邻且相等的字母，并删除它们，使被删去的字符串的左侧和右侧连在一起。

// 你需要对 s 重复进行无限次这样的删除操作，直到无法继续为止。

// 在执行完所有删除操作后，返回最终得到的字符串。

// 本题答案保证唯一。

//  

// 示例 1：

// 输入：s = "abcd", k = 2
// 输出："abcd"
// 解释：没有要删除的内容。
// 示例 2：

// 输入：s = "deeedbbcccbdaa", k = 3
// 输出："aa"
// 解释： 
// 先删除 "eee" 和 "ccc"，得到 "ddbbbdaa"
// 再删除 "bbb"，得到 "dddaa"
// 最后删除 "ddd"，得到 "aa"
// 示例 3：

// 输入：s = "pbbcggttciiippooaais", k = 2
// 输出："ps"
//  

// 提示：

// 1 <= s.length <= 10^5
// 2 <= k <= 10^4
// s 中只含有小写英文字母。



var removeDuplicates = function(s, k) {
    let stack=[];  //也可以用双指针模拟
    let count=0;
    let tempstr="";
    for(let i=0;i<s.length;++i){
        if(stack.length>0){
            //栈不为空
            if(s[i]==stack[stack.length-1]){
                //新压栈的参数与栈最后一个相等
                if(count==0 && tempstr==""){
                        //这种情况就是去除K个字符串后栈内的最后一个字符串与新入栈的字符串相同
                        //示例： k=3 s="abbbaad"  bbb去除后 aaa依然可以成为三个相邻的重复项
                    tempstr = s[i];
                    for(let i=stack.length-1;i>=0;--i){
                        if(stack[i]==tempstr) count++;
                        else break;
                    }
                } 
            } else {
                //新压栈的参数与栈最后一个不等
                if(count>0) count=0;
                tempstr = s[i];
            }
        } else {
            //栈为空
            tempstr = s[i];
        }
        stack.push(tempstr);
        count++;
        if(count==k){
            while(count>0){
                stack.pop();
                count--;
            }
            tempstr="";
        }
    }
    return stack.join("");
};