'use strict'

function foo() {
    var x = 1
    x = x + 1

    var y = `Hello ${z}`; //提升变量 z 的声明
    console.log(y)
    var z = 'Bob'
    // 如果注释变量 z d的声明，z is not defined

    function bar() {
        var x = 'A'
        console.log('x in bar() = ' + x)
        // 'A'
    }
    console.log('x in foo() = ' + x)
    // 1
    bar()
}

foo()
// x = x + 2; 
// Reference Error: x is not defined 

