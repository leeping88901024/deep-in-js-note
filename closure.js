// 原文地址：http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html

var n = 99;

function f1() {
    console.log(n)
    // 函数内部声明变量要使用 var 关键字，否则为全局变量
    // f = 99;  --全局变量
     var f = 66; 

    // 我们要在外部访问函数内部的局部变量
    function f2() {
        // 可访问 f1 定义的变量 -- 链式作用域（chain scope）
        console.log(f)
    }

    Add=function(){f+=1}

    // 在 f1 内，将 f2 作为返回值，即可实现全局访问局部变量
    return f2
}

// f2 被赋给一个全局变量，这导致 f2 始终在内存中，而 f2 的存在依赖于 f1 ,因此 f1 也始终在内存中
var result = f1();

result();

// Add是全局的
Add();

result();

/*
 上述 f2() 称为闭包
 闭包就是能够读取其他函数内部变量的函数。
 在JavaScript中，只有函数内部的子函数才能读取局部变量，因此可以把闭包理解成
 "定义在一个函数内部的函数"，所以，闭包就是函数内部和函数外部连接起来的一座桥梁。

 闭包的用途：
 1.上述读取函数内部变量;
 2.让这些变量的值始终保持在内存中

*/

