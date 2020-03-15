/*
 * @Author: your name
 * @Date: 2019-10-28 13:03:06
 * @LastEditTime: 2019-10-28 13:06:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode_fe/06_删除排序链表中的重复元素.js
 */
// 示例 1:

// 输入: 1->1->2
// 输出: 1->2

// 示例 2:

// 输入: 1->1->2->3->3
// 输出: 1->2->3
var head = [1,1,2]
var deleteDuplicates = function(head) {
    var cur = head;
    while(cur && cur.next) {
        if(cur.val == cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
};

console.log(deleteDuplicates(head))