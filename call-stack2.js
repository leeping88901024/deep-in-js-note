/**
 * JavaScript 如何工作的
 * 
 * 
 * 原文地址：https://juejin.im/post/5a05b4576fb9a04519690d42#comment
 * 动机：如果一个项目越来越依赖于JavaScript,这就意味着开发人员必须
 * 利用这些语言和生态系统提供的更深层次的核心内容去构建一个令人振奋的应用。
 * 
 * 
 * JavaScript 是一门单线程语言，者意味着它只有一个调用栈，因此，它同一时间只能做一件事情。
 * 
 * 调用栈是一种数据结构，它记录了我们在程序中的位置，如果我们运行到一个函数，它就会将其他程序放置在栈顶（栈的特性）。
 * 当这个函数返回的时候，就会将这个函数从栈顶弹出，者就是调用栈做的事情。
 * 
 * 每一个进入调用栈的都成为调用帧。
 * 
 * 一旦你的浏览器开始处理调用栈中的众多任务时，浏览器会被阻塞，解决办法就是异步回调。
 * 
 */

 function foo() {
     throw new Error('SessionStack will help you resolve creashes :)')
 }

 function bar() {
     foo();
 }

 function start() {
     bar();
 }

 start();