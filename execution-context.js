/**
 * 
 * 原文地址：https://juejin.im/post/5ba32171f265da0ab719a6d7
 * 
 * 1.执行上下文：
 * 执行上下文有三种：
 * （1）全局执行上下文：
 *   this = window
 * （2）函数执行上下文：
 * （3）Eval执行上下文：
 * 
 * 2.执行栈：既是调用栈
 * 3.创建执行上下文：
 * 
 */

 /*
（1）创建阶段
 ExecutionContext = {
     ThisBinding = <this value>,  // this 绑定
     LexicalEnviroment = { ... }, // 创建词法环境
     VariableEnvironment = { ... } // 创建变量环境

 } 

 this 绑定
 在全局执行上下文中，this的值指向全局对象。（在浏览器中，this引用Window对象）
 在函数执行上下文中，this的值取决于该函数是如何被调用的。如果它被一个引用对象调用，那么this会被
 设置成这个对象，否则this的值被设置为 全局对象或者 undefined (在严格模式下)
 */

 let foo = {
     baz: function () {
         console.log(this);
     }
 }

 // 'this' 引用foo
 foo.baz();

 let bar = foo.baz;

 // 'this' 引用window
 bar();


 /*

 词法环境

 伪代码
GlobalExecutionContext = {
    LexicalEnvironment: {
        EnvironmentRecord: {
            Type: 'Object',
            // 在这里绑定标识符
        }
        outer: <null>
    }
}

FunctionExecutionContext = {
    LexicalEnvironment: {
        EnvironmentRecord: {
            Type: 'Declarative',
            // 在这里绑定标识符
        }
        outer: <Grolbal or outer function environment reference>
    }
}

*/

let a = 20;
const c = 30;
var c;

function multiply(e,f) {
    var g = 20;
    return e * f * g;
}

c = multiply(20, 30);

/*
执行上下文伪代码
GlobalExectionContext = {

  ThisBinding: <Global Object>,

  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      // 在这里绑定标识符
      a: < uninitialized >,
      b: < uninitialized >,
      multiply: < func >
    }
    outer: <null>
  },

  VariableEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      // 在这里绑定标识符
      c: undefined,
    }
    outer: <null>
  }
}

FunctionExectionContext = {
  ThisBinding: <Global Object>,

  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Declarative",
      // 在这里绑定标识符
      Arguments: {0: 20, 1: 30, length: 2},
    },
    outer: <GlobalLexicalEnvironment>
  },

VariableEnvironment: {
    EnvironmentRecord: {
      Type: "Declarative",
      // 在这里绑定标识符
      g: undefined
    },
    outer: <GlobalLexicalEnvironment>
  }
}

作者：子非
链接：https://juejin.im/post/5ba32171f265da0ab719a6d7
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/