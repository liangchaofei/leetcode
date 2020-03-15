/*
 * @Author: your name
 * @Date: 2019-11-01 09:35:58
 * @LastEditTime: 2019-11-01 09:39:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode_fe/10_反转链表.js
 */
// 反转一个单链表。

// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL


var reverseList = function(head) {
    let pre = null;
     for (let cur = head; cur;) {
       let nextTemp = cur.next;
       cur.next = pre;
       pre = cur;
       cur = nextTemp;
     }
     return pre;
};