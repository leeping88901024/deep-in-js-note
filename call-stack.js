function greeting() {
    // [1] Some codes here
    sayHi();
    // [2] Some codes here
}

function sayHi() {
    return 'Hi!';
}

// 调用 `greeting` 函数
greeting();

// [3] Some code here


/**
调用栈列表的变化情况为:
1.开始为空
2.忽略所有的函数声明，直到遇到 greeting() 函数，调用greeting()函数，把 greeting 函数压入调用栈列表
    ##调用栈列表：##
    - greeting
3.执行 greeting 函数中的所有代码，直到遇到 sayHi() 函数，把 sayHi()函数压入调用栈列表
    ##调用栈列表：##
    - greeting
    - sayHi
4.执行 sayHi() 函数中的所有代码行，直到结束，将执行返回到调用 sayHi() 的行，
  并继续执行 greeting() 函数的其余部分，把 sayHi() 函数从调用栈中删除
    ##调用栈列表：##
    - greeting
5.当 greeting() 函数中的所有内容都执行完后，返回到它的调用行执行其余的 JS 代码，
把 greeting() 函数从调用栈列表中删除
    ##调用栈列表：##
    - 空

总结：从一个空的调用栈开始，当我们调用一个函数时，它会自动添加到调用栈中，
      在执行完所有代码之后，它会自动从调用栈中删除。最后，我们也得到一个空栈。
 */