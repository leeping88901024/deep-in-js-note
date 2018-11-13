// 1.纯粹的函数调用
var x = 1;
function test() {
    // var x = 3;  
    console.log(this.x);
}

test();
// 1 ** undefined

// 2.作为对象方法调用

function test2() {
    console.log(this.x);
}

var obj = {};
obj.x = 3;
obj.m = test2;

obj.m();
// 2
obj.m.apply();
// undefined



// 3.作为构造函数调用
function test3() {
    this.x = 5;
}

var obj2 = new test3();
console.log(obj2.x);
// 5

