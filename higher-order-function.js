// 一个函数接收另一个函数作为参数，这种函数称为高阶函数

function add(x, y, f) {
    return f(x) + f(y);
}

var result = add(-5, 6, Math.abs);
console.log(result);