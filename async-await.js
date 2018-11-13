/*
Async - 定义异步函数
async function simeName() { ... } 
 * 自动把函数转换为 Promise
 * 当调用异步函数时，函数返回值会被 resolve 处理
 * 异步函数内部可以使用 await 
 

Await - 暂停异步函数的执行
var result = await someAsyncCall();
 * 当使用在 Promise 前面时，await等待 Promise 完成，并返回 Promise 的结果
 * await 只能和 Promise 一起使用，不能和 callback 一起使用
 * await只能在async函数中

*/