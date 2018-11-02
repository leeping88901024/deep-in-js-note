function foo() {
    foo();
}

foo();

// 会有 Maximum call stack size exceeded 的错误。