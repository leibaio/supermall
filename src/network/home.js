import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}

// 函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
// 函数调用结束 -> 弹出函数栈(释放函数所有的变量)
// function test() {
//   const names = ['why', 'aaa']
// }
//
// test()
//
// test()

// 保存商品数据分析
let totalNums = []

const num1 = [20, 11, 222]
const num2 = [111, 22, 333]

//totalNum不能直接赋值，否则数据就只有一个

//方法1： 循环push
// for (let n of num1) {
//   totalNums.push(n)
// }

//方法2: es6拓展（展开）运算符...  讲一个数组转为用逗号分隔的参数序列。
totalNums.push(...num1)