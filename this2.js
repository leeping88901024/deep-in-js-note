// 原文地址：https://juejin.im/post/5b9f176b6fb9a05d3827d03f

// 1.隐式绑定
const user = {
    name: 'Tyler',
    age: 27,
    greet() {
        // this 引用user对象
        console.log(`Hello, my name is ${this.name}`)
    },
    mother: {
        name: 'Stacey',
        greet() {
            console.log(`Hello, my name is ${this.name}`)
        }
    }
}

user.greet();
user.mother.greet();

// 2.显示绑定
function greet(lang1, lang2, lang3) {
    console.log(`Hello, my name is ${this.name} and i know ${lang1},${lang2},${lang3}`)
}

// 让 greet() 方法调用的时候将 this 指向 user 对象
// -call() 是每个函数有的方法，它允许在函数调用时为函数指定上下文
// 如果要传参数则在第一个参数后一个一个的传
const language = ['Javascript', 'Ruby', 'Python']
greet.call(user, language[0], language[1], language[2]);

// 如果不想参数一个一个的传，直接传数组，则使用 apply()
greet.apply(user, language);

// bind() 和 call类似，不同之处在于不会立刻执行函数，而是返回一个新的函数
const newfun = greet.bind(user, language[0], language[1], language[2]);
newfun();

// 3. new 绑定
function User (name, age) {
    /*
      javascript 会在底层创建一个新的对象 `this`, 他会代理不在 User 原型链上的属性。
      如果 一个函数用 new 关键字调用，this 就会指向解释器创建的对象。
    */
   this.name = name
   this.age = age
}

const me = new User('Tyler', 27);
console.log(me)

// 4. window绑定
function sayAge () {
    console.log(`My age is ${this.age}`)
}

sayAge();
// undefined

// javascript 默认 this 指向window对象
window.age = 27;
sayAge();

// ES5 添加了 严格模式 ,在严格模式中JavaScript不会默认 this 指向 window 对象，
// 而会正确地把 this 保持为 undefined。

